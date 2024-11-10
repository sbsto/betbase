CREATE TABLE IF NOT EXISTS "friend" (
	"id" text PRIMARY KEY NOT NULL,
	"user_a_id" text NOT NULL,
	"user_b_id" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invite" (
	"id" text PRIMARY KEY NOT NULL,
	"source_wallet_address" text NOT NULL,
	"target_friend_address" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nonce" (
	"id" text PRIMARY KEY NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session" (
	"id" text PRIMARY KEY NOT NULL,
	"wallet_address" text NOT NULL,
	"chain_id" integer NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"wallet_address" text PRIMARY KEY NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "friend" ADD CONSTRAINT "friend_user_a_id_user_wallet_address_fk" FOREIGN KEY ("user_a_id") REFERENCES "public"."user"("wallet_address") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "friend" ADD CONSTRAINT "friend_user_b_id_user_wallet_address_fk" FOREIGN KEY ("user_b_id") REFERENCES "public"."user"("wallet_address") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "friend" ADD CONSTRAINT "user_a_fk" FOREIGN KEY ("user_a_id") REFERENCES "public"."user"("wallet_address") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "friend" ADD CONSTRAINT "user_b_fk" FOREIGN KEY ("user_b_id") REFERENCES "public"."user"("wallet_address") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "invite" ADD CONSTRAINT "source_wallet_address_fk" FOREIGN KEY ("source_wallet_address") REFERENCES "public"."user"("wallet_address") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "invite" ADD CONSTRAINT "target_wallet_address_fk" FOREIGN KEY ("target_friend_address") REFERENCES "public"."user"("wallet_address") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_a_index" ON "friend" USING btree ("user_a_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_b_index" ON "friend" USING btree ("user_b_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_a_user_b_index" ON "friend" USING btree ("user_a_id","user_b_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "source_address_index" ON "invite" USING btree ("source_wallet_address");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "target_address_index" ON "invite" USING btree ("target_friend_address");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "source_target_address_index" ON "invite" USING btree ("source_wallet_address","target_friend_address");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "value_index" ON "nonce" USING btree ("value");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "wallet_address_chain_id_index" ON "session" USING btree ("wallet_address","chain_id");