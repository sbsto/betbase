import { Effect } from 'effect';
import { db } from '../db';
import { nonce, session } from '../drizzle/schema';
import { and, eq, gt } from 'drizzle-orm';

class NonceGenerationError extends Error {
	readonly _tag = 'NonceGenerationError';
}

class NonceVerifyError extends Error {
	readonly _tag = 'NonceVerifyError';
}

class SessionCreateError extends Error {
	readonly _tag = 'SessionCreateError';
}

class SessionDeleteError extends Error {
	readonly _tag = 'SessionDeleteError';
}

export const createNonce = () =>
	Effect.tryPromise({
		try: async () => {
			const generated = await db
				.insert(nonce)
				.values({})
				.returning({ value: nonce.value });

			return generated[0].value;
		},
		catch: () => new NonceGenerationError(),
	});

export const nonceExists = (value: string) =>
	Effect.tryPromise({
		try: async () => {
			const result = await db
				.delete(nonce)
				.where(and(eq(nonce.value, value), gt(nonce.expiresAt, new Date())))
				.returning({ value: nonce.value });

			return result.length > 0;
		},
		catch: () => new NonceVerifyError(),
	});

export const saveSession = ({
	walletAddress,
	chainId,
}: {
	walletAddress: string;
	chainId: number;
}) =>
	Effect.tryPromise({
		try: async () => {
			await db.insert(session).values({ walletAddress, chainId });
		},
		catch: () => new SessionCreateError(),
	});

class SessionFindError extends Error {
	readonly _tag = 'SessionFindError';
}

export const getSession = ({
	walletAddress,
	chainId,
}: {
	walletAddress: string;
	chainId: number;
}) =>
	Effect.tryPromise({
		try: async () => {
			const result = await db
				.select()
				.from(session)
				.where(
					and(
						eq(session.walletAddress, walletAddress),
						eq(session.chainId, chainId),
						gt(session.expiresAt, new Date()),
					),
				);

			return result.at(0);
		},
		catch: () => new SessionFindError(),
	});

export const deleteSessions = ({ walletAddress }: { walletAddress: string }) =>
	Effect.tryPromise({
		try: async () => {
			await db.delete(session).where(eq(session.walletAddress, walletAddress));
		},
		catch: () => new SessionDeleteError(),
	});
