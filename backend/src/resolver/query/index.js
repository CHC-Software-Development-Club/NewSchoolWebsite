const knex = require("../../../knex");

module.exports = {
  test: () => true,
  users: async () => knex.select("*").from("users")
};
