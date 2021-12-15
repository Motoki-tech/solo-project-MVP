const fs = require("fs");
const db = require("../server/knex.js");
const path = require("path");

// (async () => {
//   try {
//     const strings = JSON.parse(
//       fs.readFileSync(path.resolve(__dirname, "./strings.json"))
//     );
//     for (const string of strings) {
//       const string_name = string.name;
//       const string_gage = string.gage;

//       const result = await db("stringmenu").insert({
//         string_name,
//         string_gage,
//       });
//       console.log("insert01");
//     }
//   } catch (err) {
//     console.error("Error inserting records", err);
//   }
// })();

exports.seed = async (knex) => {
  await knex("stringmenu").del();
  await knex("stringmenu").insert([
    { string_name: "Elixir", string_gage: "09 〜 42" },
    { string_name: "Elixir", string_gage: "10 〜 46" },
    { string_name: "Elixir", string_gage: "12 〜 52" },
    { string_name: "ERNIE BALL", string_gage: "10 〜 46" },
    { string_name: "DAddario", string_gage: "09 〜 40" },
    { string_name: "SIT", string_gage: "09 〜 54" },
  ]);
};
