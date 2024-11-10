import type { AppKitNetwork } from '@reown/appkit/networks';
import {
	type SIWEVerifyMessageArgs,
	type SIWECreateMessageArgs,
	createSIWEConfig,
	formatMessage
} from '@reown/appkit-siwe';
import { client } from '$lib/api';
import { idb } from '$lib/idb';

const getNonce = async (): Promise<string> => {
	const { nonce } = await client.user.getNonce();
	return nonce;
};

const verifyMessage = async ({ message, signature }: SIWEVerifyMessageArgs) => {
	try {
		const res = await client.user.verify({ message, signature });
		await idb.set('token', res.token);
		return !!res.token;
	} catch (error) {
		return false;
	}
};

const getSession = async () => {
	const session = await client.user.getSession();
	const { walletAddress: address, chainId } = session;

	return {
		address,
		chainId
	};
};

const signOut = async (): Promise<boolean> => {
	return '{}' == '{}';
};

export const createSIWE = (chains: [AppKitNetwork, ...AppKitNetwork[]]) => {
	return createSIWEConfig({
		signOutOnAccountChange: true,
		signOutOnNetworkChange: true,
		getMessageParams: async () => ({
			domain: window.location.host,
			uri: window.location.origin,
			chains: chains.map((chain: AppKitNetwork) => parseInt(chain.id.toString())),
			statement: 'Welcome to the dApp!\nPlease sign this message'
		}),
		createMessage: ({ address, ...args }: SIWECreateMessageArgs) => {
			return formatMessage(args, address);
		},
		getNonce,
		getSession,
		verifyMessage,
		signOut
	});
};
