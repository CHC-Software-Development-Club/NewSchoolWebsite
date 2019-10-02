const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    id: Int
    name: String
  }

  type Query {
    test: String
    users: [User]
  }
`;
