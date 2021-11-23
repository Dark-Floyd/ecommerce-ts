import { gql } from "@apollo/client";

export const CartQueries = {
    getAll: gql`
        query GetAllCart {
            getAllCart {
                product {
                    id
                    name
                    images
                    uploadedDate
                    description
                    price
                    seller {
                        name
                    }
                    category {
                        name
                    }
                    additionalInfo
                }
                amount
            }
        }
    `,
};
