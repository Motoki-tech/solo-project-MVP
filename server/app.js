const express = require("express");
const app = express();
const db = require("./knex");

app.use(express.json());

// app.get("/api/string", async (req, res) => {
//   const notes = await db("string").select();
//   res.status(200).send(notes);
// });

module.exports = app;
