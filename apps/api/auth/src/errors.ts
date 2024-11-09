export class CustomerExistsError extends Error {
	readonly _tag = 'CustomerExistsError';
}

export class CustomerNotFoundError extends Error {
	readonly _tag = 'CustomerNotFoundError';
}

export class PublishOTPError extends Error {
	readonly _tag = 'PublishOTPError';
}

export class VerificationFailedError extends Error {
	readonly _tag = 'VerificationFailedError';
}

export class DatabaseError extends Error {
	readonly _tag = 'DatabaseError';
}
