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

// module.exports = {
// development: {
//   client: "sqlite3",
//   connection: {
//     filename: "./dev.sqlite3",
//   },
// },

// staging: {
//   client: "pg",
//   connection: {
//     database: "my_db",
//     user: "username",
//     password: "password",
//   },
//   pool: {
//     min: 2,
//     max: 10,
//   },
//   migrations: {
//     tableName: "knex_migrations",
//   },
// },

// production: {
//   client: "postgresql",
//   connection: {
//     database: "my_db",
//     user: "username",
//     password: "password",
//   },
//   pool: {
//     min: 2,
//     max: 10,
//   },
//   migrations: {
//     tableName: "knex_migrations",
//   },
// },
// client: "pg",
// connection: {
//   host: "127.0.0.1",
//   user: process.env.DB_USER,
//   password: process.env.DB_PW,
//   database: process.env.DB_NAME,
// },
// };
