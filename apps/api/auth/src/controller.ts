import { api, APIError } from 'encore.dev/api';
import { Effect } from 'effect';
import type {
	CompleteSignupPayload,
	StartLoginPayload,
	StartSignupPayload,
} from './types';
import * as s from './service';

export const startSignup = api({ method: 'POST' }, (args: StartSignupPayload) =>
	Effect.runPromise(
		Effect.map(
			s.startSignup(args).pipe(
				Effect.catchTag('DatabaseError', () =>
					Effect.die(APIError.internal('Internal error')),
				),
				Effect.catchTag('CustomerExistsError', () => Effect.succeed({})),
			),
			() => ({}),
		),
	),
);

export const completeSignup = api(
	{ method: 'POST' },
	(args: CompleteSignupPayload) =>
		Effect.runPromise(
			Effect.map(
				s.completeSignup(args).pipe(
					Effect.catchTag('DatabaseError', () =>
						Effect.die(APIError.internal('Internal error')),
					),
					Effect.catchTag('VerificationFailedError', () =>
						Effect.die(APIError.notFound('Invalid credentials')),
					),
				),
				() => ({}),
			),
		),
);

export const login = api({ method: 'POST' }, (args: StartLoginPayload) =>
	Effect.runPromise(s.login(args)),
);

export const completeLogin = api(
	{ method: 'POST' },
	(args: CompleteSignupPayload) => Effect.runPromise(s.completeLogin(args)),
);
