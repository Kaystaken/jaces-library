import { gql } from '@apollo/client';

export const SEARCH_CARDS = gql`
  query searchCards($searchTerm: String!) {
    searchCards(searchTerm: $searchTerm) {
      id
      name
      oracle_text
      type_line
      image_uris {
        normal
      }
    }
  }
`;

export const QUERY_CARDS = gql`
  query cards {
    cards {
      id
      name
      oracle_text
      type_line
      image_uris {
        normal
      }
    }
  }`;

export const GET_SAVED_CARDS = gql`
  query collection {
    collection {
      id
      name
      oracle_text
      type_line
      image_uris {
        normal
      }
    }
  }`;

export const DECK_QUERY = gql`
  query deck {
    deck {
      _id
      name
      cards {
        cardId
        name
        image
        description
      }
    }
  }
`;

export const GET_CARD_DETAILS = gql`
  query GetCardDetails($cardId: String!) {
    cardDetails(id: $cardId) {
      id
      name
      image_uris {
        normal
      }
      oracle_text
      type_line
    }
  }
`;

export const GET_RANDOM_COMMANDER = gql`
  query GetRandomCommanders{
    randomCommanders {
      id
      name
      image_uris{
        normal
      }
    }
  }
  
  `