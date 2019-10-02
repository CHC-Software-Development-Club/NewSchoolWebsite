// Require schema and resolver
const schema = require("./src/schema/schema");
const resolver = require("./src/resolver/index");
// Require dependencies
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const knex = require("./knex");

// Create server
const app = express();
app.enable("trust proxy");
app.disable("x-powered-by");
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true
  })
);

// Set up graphQL
const server = new ApolloServer({ typeDefs: schema, resolvers: resolver });
server.applyMiddleware({ app });

app.listen(4500);

// Graceful shutdown
const gracefulShutdown = () => knex.destroy();
// For nodemon restarts
process.once("SIGUSR2", function() {
  gracefulShutdown().then(() => process.kill(process.pid, "SIGUSR2"));
});
// For app termination
process.on("SIGINT", function() {
  gracefulShutdown().then(() => process.exit(0));
});
