import pg from 'pg';
import dotenv from 'dotenv';
const pool = pg.Pool;

dotenv.config();

const {
  DATABASE_URL: connectionString,
} = process.env;

if (!connectionString) {
  console.error('Vantar DATABASE_URL');
  process.exit(1);
}

const pool = new Pool ({
  password: 123;
});

export = pool;

// TODO gagnagrunnstengingar
