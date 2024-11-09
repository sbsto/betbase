import crypto from 'node:crypto';

export function generateOtp(): string {
	const digits = '0123456789';
	let otp = '';

	for (let i = 0; i < 6; i++) {
		const index = crypto.randomInt(0, digits.length);
		otp += digits[index];
	}

	return otp;
}

export function hash(email: string): string {
	const hash = crypto.createHash('sha256');
	hash.update(email);
	return hash.digest('hex');
}
