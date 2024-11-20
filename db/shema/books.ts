import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { shelves } from "./shelves";

export const books = pgTable("books", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  shelfId: uuid("shelf_id").references(() => shelves.id),

  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const bookRelations = relations(books, ({ one }) => ({
  shelf: one(shelves, {
    fields: [books.shelfId],
    references: [shelves.id],
  }),
}));

export type Book = typeof books.$inferSelect;
