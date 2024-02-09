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