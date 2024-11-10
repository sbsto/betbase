import { Effect, pipe } from "effect";
import { verifySignature } from "@reown/appkit-siwe";
import * as data from "./data-access";
import type { VerifyRequestPayload } from "./controller";
import { SiweMessage } from "siwe";
import { secret } from "encore.dev/config";
import { generateAuthToken } from "./utils";

const projectId = secret("REOWN_PROJECT")();

export const getNonce = () =>
  pipe(
    data.createNonce(),
    Effect.map((nonce) => ({ nonce })),
  );

class MessageVerificationError extends Error {
  readonly _tag = "MessageVerificationError";
}

class MessageVerificationFailedError extends Error {
  readonly _tag = "MessageVerificationFailedError";
}

class NonceNotFoundError extends Error {
  readonly _tag = "NonceNotFoundError";
}

export const verify = ({ message, signature }: VerifyRequestPayload) =>
  pipe(new SiweMessage(message), (parsedMessage) =>
    Effect.if(!data.nonceExists(parsedMessage.nonce), {
      onTrue: () => Effect.fail(new NonceNotFoundError()),
      onFalse: () =>
        Effect.flatMap(
          Effect.tryPromise({
            try: () =>
              verifySignature({
                address: parsedMessage.address,
                chainId: parsedMessage.chainId.toString(),
                message,
                signature,
                projectId,
              }),
            catch: () => new MessageVerificationError(),
          }),
          (verified) =>
            Effect.map(
              Effect.if(verified, {
                onTrue: () =>
                  data.saveSession({
                    walletAddress: parsedMessage.address,
                    chainId: parsedMessage.chainId,
                  }),
                onFalse: () =>
                  Effect.fail(new MessageVerificationFailedError()),
              }),
              () => ({
                token: generateAuthToken({
                  walletAddress: parsedMessage.address,
                  chainId: parsedMessage.chainId,
                }),
              }),
            ),
        ),
    }),
  );

class SessionNotFoundError extends Error {
  readonly _tag = "SessionNotFoundError";
}

export const getSession = ({
  walletAddress,
  chainId,
}: {
  walletAddress: string;
  chainId: number;
}) =>
  Effect.flatMap(data.getSession({ walletAddress, chainId }), (session) =>
    Effect.if(session === undefined, {
      onTrue: () => Effect.fail(new SessionNotFoundError()),
      onFalse: () => Effect.succeed({ walletAddress, chainId }),
    }),
  );

export const deleteSessions = data.deleteSessions;
