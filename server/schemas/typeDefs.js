const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
  }

  type Project {
    _id: ID!
    projectName: String
    category: String
    type: String
    industry: String
    scale: String
    oversight: String
    client: String
  }

  type Interest {
    _id: ID!
    interest: String
    category: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    projects: [User]!
    project(projectId: ID!): Project
    interests: [Interest]!
    interest(interestId: ID!): Interest
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth

    addUser(username: String!, password: String!): Auth
    updateUser(userId: ID!, email: String, password: String): Auth
    removeUser(userId: ID!): User

    addProject(projectName: String, category: String, type: String, industry: String, scale: String, oversight: String, client: String): Project
    updateProject(projectName: String, category: String, type: String, industry: String, scale: String, oversight: String, client: String): Project
    removeProject(projectId: ID!): Project

  }
`;


module.exports = typeDefs;
