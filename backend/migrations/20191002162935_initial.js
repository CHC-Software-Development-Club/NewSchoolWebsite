exports.up = async (knex, Promise) => {
  await knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table.text("name");
  });
};

exports.down = async (knex, Promise) => {
  await knex.schema.dropTableIfExists("users");
};
