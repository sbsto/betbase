import crypto from "node:crypto";
import {
  foreignKey,
  index,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { generateNonce } from "siwe";

export const user = pgTable("user", {
  walletAddress: text("wallet_address").primaryKey().notNull(),
  createdAt: timestamp("created_at")
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdateFn(() => new Date()),
});

export const nonce = pgTable(
  "nonce",
  {
    id: text("id").primaryKey().$defaultFn(crypto.randomUUID),
    value: text("value").$defaultFn(generateNonce).notNull(),
    expiresAt: timestamp("expires_at")
      .$defaultFn(() => {
        const expiry = new Date();
        expiry.setMinutes(expiry.getMinutes() + 15);
        return expiry;
      })
      .notNull(),
    createdAt: timestamp("created_at")
      .notNull()
      .$defaultFn(() => new Date()),
    updatedAt: timestamp("updated_at")
      .notNull()
      .$onUpdateFn(() => new Date()),
  },
  (table) => [index("value_index").on(table.value)],
);

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey().$defaultFn(crypto.randomUUID),
    walletAddress: text("wallet_address").notNull(),
    chainId: integer("chain_id").notNull(),
    expiresAt: timestamp("expires_at")
      .$defaultFn(() => {
        const expiry = new Date();
        expiry.setHours(expiry.getHours() + 24 * 30);
        return expiry;
      })
      .notNull(),
    createdAt: timestamp("created_at")
      .notNull()
      .$defaultFn(() => new Date()),
    updatedAt: timestamp("updated_at")
      .notNull()
      .$onUpdateFn(() => new Date()),
  },
  (table) => [
    index("wallet_address_chain_id_index").on(
      table.walletAddress,
      table.chainId,
    ),
  ],
);

export const friend = pgTable(
  "friend",
  {
    id: text("id").primaryKey().$defaultFn(crypto.randomUUID),
    userAId: text("user_a_id")
      .notNull()
      .references(() => user.walletAddress),
    userBId: text("user_b_id")
      .notNull()
      .references(() => user.walletAddress),
    createdAt: timestamp("created_at")
      .notNull()
      .$defaultFn(() => new Date()),
    updatedAt: timestamp("updated_at")
      .notNull()
      .$onUpdateFn(() => new Date()),
  },
  (table) => [
    index("user_a_index").on(table.userAId),
    index("user_b_index").on(table.userBId),
    index("user_a_user_b_index").on(table.userAId, table.userBId),
    foreignKey({
      name: "user_a_fk",
      columns: [table.userAId],
      foreignColumns: [user.walletAddress],
    }).onDelete("cascade"),
    foreignKey({
      name: "user_b_fk",
      columns: [table.userBId],
      foreignColumns: [user.walletAddress],
    }).onDelete("cascade"),
  ],
);

export const invite = pgTable(
  "invite",
  {
    id: text("id").primaryKey().$defaultFn(crypto.randomUUID),
    sourceWalletAddress: text("source_wallet_address").notNull(),
    targetWalletAddress: text("target_friend_address").notNull(),
    createdAt: timestamp("created_at")
      .notNull()
      .$defaultFn(() => new Date()),
    updatedAt: timestamp("updated_at")
      .notNull()
      .$onUpdateFn(() => new Date()),
  },
  (table) => [
    index("source_address_index").on(table.sourceWalletAddress),
    index("target_address_index").on(table.targetWalletAddress),
    index("source_target_address_index").on(
      table.sourceWalletAddress,
      table.targetWalletAddress,
    ),
    foreignKey({
      name: "source_wallet_address_fk",
      columns: [table.sourceWalletAddress],
      foreignColumns: [user.walletAddress],
    }).onDelete("cascade"),
    foreignKey({
      name: "target_wallet_address_fk",
      columns: [table.targetWalletAddress],
      foreignColumns: [user.walletAddress],
    }).onDelete("cascade"),
  ],
);
