import { Pool } from 'pg';

const pool = new Pool({
    user: "postgres",
    password: "1618",
    host: "localhost",
    port: 5432,
    database: "tolkai",
});

export default pool;