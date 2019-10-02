const pg = require("pg");
const database = require("./knexfile.js");
if (typeof process.env.NODE_ENV === "undefined") {
  throw new Error("NODE_ENV is not defined");
}
const environment = process.env.NODE_ENV;
const client = new pg.Pool(database[environment].connection);

let retryCounter = 0;
const retryCountMax = 60;

(function retryConnectTillSucceed() {
  console.info(
    `Checking Postgres connection on port ${database[environment].port}...`
  );
  client.connect(err => {
    if (err) {
      console.info("Postgres connection failed. Stack trace as follows:");
      console.error(err.stack);
      if (++retryCounter >= retryCountMax) {
        process.exit(1);
      } else {
        setTimeout(retryConnectTillSucceed, 1000);
      }
    } else {
      console.info("Postgres connection succeeded!");
      process.exit(0);
    }
  });
})();
