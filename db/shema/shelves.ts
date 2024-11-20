import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { books } from "./books";
import { relations } from "drizzle-orm";

export const shelves = pgTable("shelves", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
});

export const shelfRelations = relations(shelves, ({ many }) => ({
  books: many(books),
}));

export type Shelf = typeof shelves.$inferSelect;
