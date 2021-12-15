//sever/app.js
const express = require("express");
const app = express();
const db = require("./knex");

app.use(express.json());

app.get("/api/string", async (req, res) => {
  const notes = await db().select().table("string");
  res.status(200).send(notes);
  // console.log("aaaaaaaa");
  // res.send("Hello")
});

// const port = 4000 || process.env.PORT;
// app.listen(port, () => {
//   console.log(`🎉 Server running at http://localhost:${port} !`);
// });

module.exports = app;
