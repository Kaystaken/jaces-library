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
  query collection {
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
