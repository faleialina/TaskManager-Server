import dotenv from 'dotenv';
dotenv.config();
import {Pool} from 'pg';


const pool = new Pool({
  user: process.env.user_DB,
  host: process.env.host_DB,
  database: process.env.database_DB,
  password: process.env.password_DB,
  port: process.env.port_DB,
});

export {pool};