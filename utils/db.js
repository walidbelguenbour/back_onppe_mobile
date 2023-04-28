const { Pool } = require("pg");

const pool = new Pool({
  user: "openpg",
  host: "localhost",
  database: "DB_Security",
  password: "openpgpwd",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
