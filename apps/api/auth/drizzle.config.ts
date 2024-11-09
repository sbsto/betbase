import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { name } from './encore.service';

export default defineConfig({
	out: `./${name}/drizzle`,
	schema: `./${name}/drizzle/schema.ts`,
	dialect: 'postgresql',
	dbCredentials: {
		url: `${process.env.DATABASE_URL}/auth?sslmode=disable`,
	},
});
