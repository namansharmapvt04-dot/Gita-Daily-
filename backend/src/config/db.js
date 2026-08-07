const { Pool } = require('pg');

// Connection pool, not a single connection - critical for handling concurrent users.
// max: sized for a single API instance; when we horizontally scale the API,
// each instance gets its own pool, and Postgres's own max_connections needs to
// accommodate (instances x max). 20 per instance is a safe starting point.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

pool.on('error', (err) => {
  console.error('Unexpected Postgres pool error', err);
});

module.exports = pool;
