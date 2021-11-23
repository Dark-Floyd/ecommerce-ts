import { gql } from "@apollo/client";

export const CartMutations = {
    insertCartProduct: gql`
        mutation InsertProductToCart($insertCartDto: InsertCartDto!) {
            insertProductToCart(insertCartDto: $insertCartDto) {
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
    updateCartProductAmount: gql`
        mutation UpdateCartProductAmount($updateCartDto: UpdateCartDto!) {
            updateCartProductAmount(updateCartDto: $updateCartDto) {
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
    deleteCartProduct: gql`
        mutation DeleteCartProduct($id: Int!) {
            deleteCartProduct(id: $id) {
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
