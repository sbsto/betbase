import { Effect } from "effect";
import { api, APIError } from "encore.dev/api";
import * as service from "./service";
import { getAuthData } from "~encore/auth";

interface GetNonceResponse {
  nonce: string;
}

export const getNonce = api(
  { method: "GET", path: "/nonce", expose: true },
  async (): Promise<GetNonceResponse> => Effect.runPromise(service.getNonce()),
);

export interface VerifyRequestPayload {
  message: string;
  signature: string;
}

interface VerifyResponse {
  token: string;
}

export const verify = api(
  { method: "POST", path: "/verify", expose: true },
  async ({
    message,
    signature,
  }: VerifyRequestPayload): Promise<VerifyResponse> =>
    Effect.runPromise(
      Effect.catchTags(service.verify({ message, signature }), {
        NonceNotFoundError: (e) =>
          Effect.log(e).pipe(() =>
            Effect.die(APIError.invalidArgument("Invalid nonce")),
          ),
        MessageVerificationError: (e) =>
          Effect.log(e).pipe(() =>
            Effect.die(APIError.internal("Failed to verify message")),
          ),
        MessageVerificationFailedError: (e) =>
          Effect.log(e).pipe(() =>
            Effect.die(APIError.invalidArgument("Failed to verify message")),
          ),
        SessionCreateError: (e) =>
          Effect.log(e).pipe(() =>
            Effect.die(APIError.internal("Failed to create session")),
          ),
      }),
    ),
);

interface SessionResponse {
  walletAddress: string;
  chainId: number;
}

export const getSession = api(
  { method: "GET", path: "/session", auth: true, expose: true },
  async (): Promise<SessionResponse> => {
    const data = getAuthData();

    if (!data) {
      throw APIError.unauthenticated;
    }

    return {
      chainId: data.chainId,
      walletAddress: data.userID,
    };
  },
);
