exports.up = function (knex) {
  // knex.schema.dropTable("String");

  return knex.schema.createTable("string", (table) => {
    table.increments().index();

    table.text("string_name");

    table.text("string_gage");
  });
};

exports.down = function (knex, Promise) {};
