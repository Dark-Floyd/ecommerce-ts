import { Product } from "./product";

export interface ProductCart {
    product: Product;
    amount: number;
}

export interface Cart {
    products: ProductCart[];
}
