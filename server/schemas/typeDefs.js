const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Project {
    _id: ID
    projectName: String
    category: String
    type: String
    industry: String
    scale: String
    oversight: String
    client: String
  }

  type Interest {
    _id: ID
    interest: String
    category: String
  }

  type Education {
    _id: ID
    focus: String
    school: String
    dates: String
    location: String
    program: String
  }

  type Experience {
    _id: ID
    company: String
    title: String
    dateRange: String
    location: String
    description1: String
    description2: String
    description3: String
    description4: String
    description5: String
    description6: String
    description7: String
    description8: String
    description9: String
    description10: String
    description11: String
    description12: String
    description13: String
    description14: String
    description15: String
  }

  type TechnicalSkill {
    _id: ID
    skill: String
  }

  type CoreCompetency {
    _id: ID
    coreCompetency: String
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    projects: [Project]
    project(projectId: ID!): Project
    interests: [Interest]
    interest(interestId: ID!): Interest
    educations: [Education]
    education(educationId: ID!): Education
    experiences: [Experience]
    experience(experienceId: ID!): Experience
    technicalSkills: [TechnicalSkill]
    technicalSkill(technicalSkillId: ID!): TechnicalSkill
    coreCompetencies: [CoreCompetency]
    coreCompetency(coreCompetencyId: ID!): CoreCompetency
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    updateUser(userId: ID!, email: String, password: String): User
    removeUser(userId: ID!): User
  }
`;


module.exports = typeDefs;

    // addProject(projectName: String, category: String, type: String, industry: String, scale: String, oversight: String, client: String): Project
    // updateProject(projectName: String, category: String, type: String, industry: String, scale: String, oversight: String, client: String): Project
    // removeProject(projectId: ID!): Project