const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/DB_Security',
  ssl: process.env.NODE_ENV === 'production'
});

async function getAllWilayas() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM wilaya');
    return rows;
  } finally {
    client.release();
  }
}

async function getWilayaById(id) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM wilaya WHERE code=$1', [id]);
    return rows[0];
  } finally {
    client.release();
  }
}

async function createWilaya(code, namefr, namear) {
  const client = await pool.connect();
  try {
    await client.query('INSERT INTO wilaya (code, namefr, namear) VALUES ($1, $2, $3)', [code, namefr, namear]);
  } finally {
    client.release();
  }
}

module.exports = {
  getAllWilayas,
  getWilayaById,
  createWilaya
};