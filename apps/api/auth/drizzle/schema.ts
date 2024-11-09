import crypto from 'node:crypto';
import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey().$defaultFn(crypto.randomUUID),
	email: text('email').notNull().unique(),
	createdAt: timestamp('created_at')
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: timestamp('updated_at')
		.notNull()
		.$onUpdateFn(() => new Date()),
});

export const otps = pgTable('otp', {
	id: text('id').primaryKey().$defaultFn(crypto.randomUUID),
	code: text('code').notNull(),
	emailHash: text('email').notNull(),
	attempts: integer('attempts')
		.notNull()
		.$defaultFn(() => 0),
	createdAt: timestamp('created_at')
		.notNull()
		.$defaultFn(() => new Date()),
	expiresAt: timestamp('expires_at').notNull(),
});
