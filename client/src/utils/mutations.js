import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation Mutation($username: String, $email: String, $password: String) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      deck {
        name
        username
      }
    }
  }
}
`;

export const ADD_TO_DECK = gql`
  mutation AddToDeck(, $cardName: String!, $cardImage: String!) {
    addCardToDeck(cardName: $cardName, cardImage: $cardImage) {
      _id
      name
      cards {
        cardId
        quantity
        image
      }
    }
  }
`;

export const REMOVE_FROM_DECK = gql`
  mutation RemoveFromDeck($deckId: ID!, $cardId: ID!) {
    removeCardFromDeck(deckId: $deckId, cardId: $cardId) {
      _id
      name
      cards {
        cardId
        quantity
      }
    }
  }
`;
