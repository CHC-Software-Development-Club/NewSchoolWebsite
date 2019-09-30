//Getting dependencies
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const db = require('./db');
const fs = require('fs');
const {graphiqlExpress,graphqlExpress} = require('apollo-server-express');

//External Files
const {makeExecutableSchema} = require('graphql-tools');
const resolver = require('resolver');
const typeDefs = fs.readFileSync('./schema.graphql', {
    encoding:'utf-8'
});

//Some Port Stuff
const port = process.env.port || 9000;
//Starts Express
const app = express();

const schema = makeExecutableSchema({typeDefs, resolvers});
app.use(cors(), bodyParser.json());
app.use('/graphql', graphqlExpress({schema}));
app.use('/graphql', graphqlExpress({endpointURL:'/graphql'}));

app.listen(
    port, () => console.info('GraphQL is on port ${port}')
);


