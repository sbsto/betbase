import { idb } from '$lib/idb';
import Client, { Local } from './gen';

export const client = new Client(Local, {
	auth: async () => {
		const token = await idb.get('token');
		return token ? { authorization: `Bearer ${token}` } : undefined;
	}
});
