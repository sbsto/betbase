export interface VerifyCodePayload {
	emailHash: string;
	code: string;
}

export type StartSignupPayload = {
	email: string;
};

export interface CompleteSignupPayload {
	email: string;
	code: string;
}

export type CompleteSignupResponse = {
	token: string;
};

export type StartLoginPayload = {
	email: string;
};

export interface CompleteLoginPayload extends VerifyCodePayload {
	email: string;
	code: string;
}

export type CompleteLoginResponse = {
	token: string;
};
