//sever/app.js
const express = require("express");
const knex = require("./knex");
const app = express();

app.use(express.json());

app.get("/api/menu", async (req, res) => {
  const notes = await knex.select().table("String");
  res.status(200).send(notes);
  console.log("aaaaaaaa");
});

module.exports = app;
