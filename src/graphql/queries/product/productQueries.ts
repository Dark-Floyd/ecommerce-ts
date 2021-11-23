import { gql } from "@apollo/client";

export const ProductQueries = {
    getAll: gql`
        query GetAllProducts {
            getAllProducts {
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
        }
    `,
    getById: gql`
        query GetProductById($id: Int!) {
            getProduct(id: $id) {
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
        }
    `,
};

export interface ProductGetByIdVars {
    id: number;
}
