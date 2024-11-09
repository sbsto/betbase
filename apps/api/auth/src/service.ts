import { Effect, pipe } from 'effect';
import type {
	CompleteSignupPayload,
	StartLoginPayload,
	StartSignupPayload,
} from './types';
import {
	userExistsByEmail,
	createVerificationCode,
	verifyCode,
	createUser,
} from './data-access';
import {
	CustomerExistsError,
	CustomerNotFoundError,
	VerificationFailedError,
	PublishOTPError,
} from './errors';
import { otps } from '../topics';
import { hash } from './utils';

const createAndSendVerificationCode = (email: string) =>
	pipe(hash(email), (hashedEmail) =>
		Effect.flatMap(createVerificationCode(hashedEmail), (code) =>
			Effect.tryPromise({
				try: () => otps.publish({ email, code }),
				catch: () => new PublishOTPError(),
			}),
		),
	);

export const startSignup = ({ email }: StartSignupPayload) =>
	Effect.if(userExistsByEmail(email), {
		onFalse: () => createAndSendVerificationCode(email),
		onTrue: () => Effect.fail(new CustomerExistsError()),
	});

export const completeSignup = ({ email, code }: CompleteSignupPayload) =>
	pipe(hash(email), (emailHash) =>
		Effect.if(verifyCode({ emailHash, code }), {
			onFalse: () => Effect.fail(new VerificationFailedError()),
			onTrue: () => createUser(email),
		}),
	);

export const login = ({ email }: StartLoginPayload) =>
	Effect.if(userExistsByEmail(email), {
		onTrue: () => createAndSendVerificationCode(email),
		onFalse: () => Effect.fail(new CustomerNotFoundError()),
	});

export const completeLogin = ({ email, code }: CompleteSignupPayload) =>
	pipe(hash(email), (emailHash) =>
		Effect.if(verifyCode({ emailHash, code }), {
			onFalse: () => Effect.fail(new VerificationFailedError()),
			onTrue: () => Effect.succeed(null),
		}),
	);
