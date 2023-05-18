import { createPool } from "mysql2/promise";
import * as fs from "node:fs";

export const pool = createPool({
  host: 'web-server-prueba.mysql.database.azure.com',
  user: 'David',
  password: 'S3naqu3rib',
  port: 3306,
  database: 'customersdb',
  ssl: { 
    rejectUnauthorized: true,
    ca:fs.readFileSync("ssl/DigiCertGlobalRootCA.crt.pem","utf8")
  } 
});
