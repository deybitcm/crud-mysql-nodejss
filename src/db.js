import { createPool } from "mysql2/promise";
import * as fs from "node:fs";
import { config } from 'dotenv';
config();

const host = process.env.DB_HOST;
const db = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const puerto = process.env.DB_PORT;

export const pool = createPool({
  host: host,
  user: user,
  password: password,
  port: puerto,
  database: db,
  ssl: { 
    rejectUnauthorized: true,
    ca:fs.readFileSync("ssl/DigiCertGlobalRootCA.crt.pem","utf8")
  } 
});
