const { Pool } = require('pg');   // ✅ THIS LINE IS REQUIRED

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;