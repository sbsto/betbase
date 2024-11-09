import { Effect, DateTime } from 'effect';
import { db } from '../db';
import { otps, user } from '../drizzle/schema';
import { and, eq, gt, lt, sql } from 'drizzle-orm';
import { DatabaseError } from './errors';
import { generateOtp } from './utils';
import type { VerifyCodePayload } from './types';

export const userExistsByEmail = (
	email: string,
): Effect.Effect<boolean, DatabaseError, never> => {
	return Effect.map(
		Effect.tryPromise({
			try: () => db.select().from(user).where(eq(user.email, email)),
			catch: () => new DatabaseError('Failed to check if user exists'),
		}),
		(args) => args.length > 0,
	);
};

export const createUser = (
	email: string,
): Effect.Effect<void, DatabaseError, never> =>
	Effect.tryPromise({
		try: () => db.insert(user).values({ email }).execute(),
		catch: () => new DatabaseError('Failed to create user'),
	});

export const createVerificationCode = (emailHash: string) =>
	Effect.flatMap(
		Effect.map(DateTime.now, (now) => {
			const expiresAt = DateTime.toDate(DateTime.add(now, { minutes: 5 }));
			return { code: generateOtp(), expiresAt };
		}),
		(model) =>
			Effect.flatMap(
				Effect.tryPromise({
					try: () =>
						db.transaction(async (trx) => {
							await trx.delete(otps).where(eq(otps.emailHash, emailHash));

							const [result] = await trx
								.insert(otps)
								.values({ emailHash, ...model })
								.returning({ code: otps.code });

							return result.code;
						}),
					catch: () => new DatabaseError('Failed to create verification code'),
				}),
				(code) => Effect.succeed(code),
			),
	);

export const verifyCode = ({ emailHash, code }: VerifyCodePayload) =>
	Effect.flatMap(DateTime.now, (now) =>
		Effect.tryPromise({
			try: () =>
				db.transaction(async (trx) => {
					const [result] = await trx
						.update(otps)
						.set({ attempts: sql`${otps.attempts} + 1` })
						.where(
							and(
								eq(otps.emailHash, emailHash),
								gt(otps.expiresAt, DateTime.toDateUtc(now)),
								lt(otps.attempts, 3),
							),
						)
						.returning({ attempts: otps.attempts, code: otps.code });

					if (!result) return false;

					if (result.attempts >= 3) {
						await trx.delete(otps).where(eq(otps.emailHash, emailHash));
						return false;
					}

					if (result.code !== code) {
						return false;
					}

					await trx.delete(otps).where(eq(otps.emailHash, emailHash));
					return true;
				}),
			catch: () => new DatabaseError('Failed to verify code'),
		}),
	);
