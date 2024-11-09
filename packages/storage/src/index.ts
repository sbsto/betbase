export class Storage<T extends object> {
	private dbName: string;
	private storeName: string;
	private dbVersion: number;
	private db: IDBDatabase | null = null;

	constructor(dbName: string, storeName: string, dbVersion = 1) {
		this.dbName = dbName;
		this.storeName = storeName;
		this.dbVersion = dbVersion;
	}

	private openDB(): Promise<IDBDatabase> {
		return new Promise((resolve, reject) => {
			if (this.db) {
				return resolve(this.db);
			}

			const request = indexedDB.open(this.dbName, this.dbVersion);

			request.onupgradeneeded = () => {
				const db = request.result;
				if (!db.objectStoreNames.contains(this.storeName)) {
					db.createObjectStore(this.storeName);
				}
			};

			request.onsuccess = () => {
				this.db = request.result;
				resolve(this.db);
			};

			request.onerror = () => {
				reject(request.error);
			};
		});
	}

	async set<K extends keyof T & IDBValidKey>(
		key: K,
		value: T[K],
	): Promise<void> {
		const db = await this.openDB();
		return new Promise((resolve, reject) => {
			const transaction = db.transaction(this.storeName, 'readwrite');
			const store = transaction.objectStore(this.storeName);
			const request = store.put(value, key);

			request.onsuccess = () => resolve();
			request.onerror = () => reject(request.error);
		});
	}

	async get<K extends keyof T & IDBValidKey>(
		key: K,
	): Promise<T[K] | undefined> {
		const db = await this.openDB();
		return new Promise((resolve, reject) => {
			const transaction = db.transaction(this.storeName, 'readonly');
			const store = transaction.objectStore(this.storeName);
			const request = store.get(key);

			request.onsuccess = () => resolve(request.result as T[K]);
			request.onerror = () => reject(request.error);
		});
	}

	async delete<K extends keyof T & IDBValidKey>(key: K): Promise<void> {
		const db = await this.openDB();
		return new Promise((resolve, reject) => {
			const transaction = db.transaction(this.storeName, 'readwrite');
			const store = transaction.objectStore(this.storeName);
			const request = store.delete(key);

			request.onsuccess = () => resolve();
			request.onerror = () => reject(request.error);
		});
	}

	async clear(): Promise<void> {
		const db = await this.openDB();
		return new Promise((resolve, reject) => {
			const transaction = db.transaction(this.storeName, 'readwrite');
			const store = transaction.objectStore(this.storeName);
			const request = store.clear();

			request.onsuccess = () => resolve();
			request.onerror = () => reject(request.error);
		});
	}
}
