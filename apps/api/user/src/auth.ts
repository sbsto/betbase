import { type Header, Gateway, APIError } from "encore.dev/api";
import { authHandler } from "encore.dev/auth";
import { secret } from "encore.dev/config";
import jwt from "jsonwebtoken";
import { getSession } from "./service";
import { Effect, pipe } from "effect";
import { Schema } from "effect";

const authSecret = secret("AUTH_SECRET")();

interface AuthParams {
  authorization: Header<"Authorization">;
}

interface AuthData {
  userID: string;
  chainId: number;
}

const tokenDataSchema = Schema.Struct({
  walletAddress: Schema.String,
  chainId: Schema.Number,
});

export const auth = authHandler<AuthParams, AuthData>(async (params) => {
  return Effect.runPromise(
    Effect.gen(function* (_) {
      const authHeader = params.authorization;
      const token = authHeader.split("Bearer ")[1];
      if (!token) {
        throw APIError.unauthenticated(
          "Missing or malformed Authorization header",
        );
      }

      const decoded = yield* _(
        Effect.try({
          try: () => pipe(jwt.verify(token, authSecret)),
          catch: () => APIError.unauthenticated("Invalid or expired token"),
        }),
      );

      const { walletAddress, chainId } = yield* _(
        Effect.try({
          try: () => Schema.decodeUnknownSync(tokenDataSchema)(decoded),
          catch: () => APIError.unauthenticated("Invalid or expired token"),
        }),
      );

      yield* _(getSession({ walletAddress, chainId }));

      return { userID: walletAddress, chainId };
    }),
  );
});

export const gateway = new Gateway({
  authHandler: auth,
});
