// Update with your config settings.
require("dotenv").config();
const knex = require("knex");

const db = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@127.0.0.1:5432/stringmenu`,
  searchPath: "public",
  migrations: {
    tableName: "knex_migrations",
  },
});

module.exports = db;
