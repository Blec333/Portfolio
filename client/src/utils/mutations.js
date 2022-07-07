import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    ) {
    addUser(
      username: $username
      email: $email
      password: $password
      ) {
      token
      user {
        _id
      }
    }
  }
`;

// export const UPDATE_USER = gql`
//   mutation updateUser( $account: Int ){
//     updateUser( account: $account){
//       account
//     }
//   }
// `;

export const REMOVE_USER = gql`
  mutation removeUser($userId: ID!) {
    removeUser(userId: $userID) {
      _id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

