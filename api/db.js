import pg from "pg";
const { Pool } = pg;
import * as dotenv from "dotenv";
dotenv.config();

const poolConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: true,
};

const pool = new Pool(poolConfig);

export default pool;
