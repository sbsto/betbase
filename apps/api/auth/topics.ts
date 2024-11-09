import { Topic } from 'encore.dev/pubsub';

export interface OtpEvent {
	code: string;
	email: string;
}

export const otps = new Topic<OtpEvent>('otps', {
	deliveryGuarantee: 'at-least-once',
});
