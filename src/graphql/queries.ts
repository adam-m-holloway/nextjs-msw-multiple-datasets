import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      episode {
        name
      }
      location {
        name
        dimension
      }
    }
  }
`;
