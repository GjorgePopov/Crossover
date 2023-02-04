import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Pizzeria",
  password: "Magdalena777",
  port: "5432",
});
