import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./shema";

const client = postgres(process.env.DB_URL!);
const db = drizzle(client, {
  schema: { ...schema },
});

export default db;
