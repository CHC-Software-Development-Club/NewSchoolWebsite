module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "postgres",
      user: "postgres",
      password: "postgres",
      database: "school_website",
      port: 5432
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
