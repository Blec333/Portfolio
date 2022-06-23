import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  {
    users {
      _id
      username
      email
      password
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query user($userID: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      password
    }
  }
`;

export const QUERY_PROJECTS = gql`
  {
    projects {
      _id
      projectName
      category
      type
      industry
      scale
      oversight
      client
  }
`;

export const QUERY_SINGLE_PROJECT = gql`
  query project($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      projectName
      category
      type
      industry
      scale
      oversight
      client
    }
  }
`;

export const QUERY_INTERESTS = gql`
  {
    interests {
      _id
      interest
      category
    }
  }
`;

export const QUERY_SINGLE_INTEREST = gql`
  query interest($interestId: ID!) {
    interest(interestId: $interestId) {
      _id
      interest
      category
    }
  }
`;

export const QUERY_EDUCATIONS = gql`
  {
    educations {
      _id
      focus
      school
      dates
      location
      program
    }
  }
`;

export const QUERY_SINGLE_EDUCATION = gql`
  query education ($educationId: ID!) {
    education (educationId: $educationId) {
      _id
      focus
      school
      dates
      location
      program
    }
  }
`;

export const QUERY_EXPERIENCES = gql`
  {
    experiences {
      _id
      company
      title
      dateRange
      location
      description1
      description2
      description3
      description4
      description5
      description6
      description7
      description8
      description9
      description10
      description11
      description12
      description13
      description14
      description15
    }
  }
`;

export const QUERY_SINGLE_EXPERIENCE = gql`
  query experience($experienceId: ID!) {
    experience(experienceId: $experienceId) {
      _id
      company
      title
      dateRange
      location
      description1
      description2
      description3
      description4
      description5
      description6
      description7
      description8
      description9
      description10
      description11
      description12
      description13
      description14
      description15
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      password
    }
  }
`;