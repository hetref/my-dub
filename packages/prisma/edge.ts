import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

// const connectionString =
//   process.env.NEON_DATABASE_URL || process.env.DATABASE_URL;
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);

export const prismaEdge = new PrismaClient({
  adapter,
});
