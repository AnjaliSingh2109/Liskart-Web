import { gql } from "@apollo/client";

export const GET_BRAND_DATA = gql`
    query GetExampleData {
        example {
            id
            name
        }
    }
`;
