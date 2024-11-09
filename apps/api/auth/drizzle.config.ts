import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { name } from './encore.service';

export default defineConfig({
	out: `./${name}/drizzle`,
	schema: `./${name}/drizzle/schema.ts`,
	dialect: 'postgresql',
	dbCredentials: {
		url: 'postgresql://betbase-k86i:local@127.0.0.1:9500/auth?sslmode=disable',
	},
});