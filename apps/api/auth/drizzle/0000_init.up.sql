CREATE TABLE IF NOT EXISTS "otp" (
	"id" text PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"email" text NOT NULL,
	"created_at" date NOT NULL,
	"expires_at" date NOT NULL,
	"used_at" date
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"created_at" date NOT NULL,
	"updated_at" date NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
