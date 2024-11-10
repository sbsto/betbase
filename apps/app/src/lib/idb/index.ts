import { Storage } from '@betbase/storage';

export const idb = new Storage<{ token: string }>('betbase', 'betbase');
