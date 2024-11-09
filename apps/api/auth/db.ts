import { drizzle } from 'drizzle-orm/postgres-js';
import { SQLDatabase } from 'encore.dev/storage/sqldb';

const urlDb = new SQLDatabase('auth', { migrations: './drizzle' });

export const db = drizzle(urlDb.connectionString);
