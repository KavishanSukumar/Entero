import pg from "pg";
const { Pool } = pg;

const poolConfig = {
  connectionString:
    "postgres://pgadmin:Entero@2022@enterodb.postgres.database.azure.com/entero?sslmode=require",
  ssl: true,
};

const pool = new Pool(poolConfig);

export default pool;
