exports.seed = async (knex, Promise) => {
  await knex("users").del();
  await knex("users").insert({ name: "Kian Moretz" });
};
