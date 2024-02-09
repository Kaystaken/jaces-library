import { gql } from '@apollo/client';

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
  }
`;

export const GET_SAVED_CARDS = gql`
  saved cards{
    cards {
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

export const DECK_QUERY = gql`
  query Deck {
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
