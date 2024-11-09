import { Subscription } from 'encore.dev/pubsub';
import { secret } from 'encore.dev/config';
import sgMail from '@sendgrid/mail';
import { type OtpEvent, otps } from '../auth/topics';

const sendgridApiKey = secret('SENDGRID_API_KEY');
sgMail.setApiKey(sendgridApiKey());

async function sendEmail(
	toEmail: string,
	templateId: string,
	data: Record<string, unknown>,
): Promise<void> {
	const from = { name: 'Modem', email: 'hello@modem.is' };
	const [name] = toEmail.split('@');
	const to = { name, email: toEmail };

	const msg = {
		from,
		to,
		templateId,
		dynamicTemplateData: data,
	};

	try {
		const response = await sgMail.send(msg);
		if (response[0].statusCode >= 400) {
			throw new Error(
				`Failed to send email: ${response[0].statusCode} - ${response[0].body}`,
			);
		}
	} catch (error) {
		throw new Error(`Error sending email: ${error}`);
	}
}

// OTP email sending function
async function sendOtpEmail(event: OtpEvent): Promise<void> {
	const templateId = 'd-11cca47658b643b6bc3873ebfeef4a92';
	const data = { otp: event.code };

	await sendEmail(event.email, templateId, data);
}

// Pubsub subscription to handle OTP emails
const _ = new Subscription(otps, 'send-otp-email', {
	handler: async (event: OtpEvent) => {
		await sendOtpEmail(event);
	},
});
