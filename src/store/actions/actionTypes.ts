import { Product } from "../../models/product";
import { Cart } from "../../models/cart";

// Cart

export enum CartActionTypes {
    ADD_TO_CART = "ADD_TO_CART",
    DELETE_FROM_CART = "DELETE_FROM_CART",
    CHANGE_AMOUNT_TO_CART = "CHANGE_AMOUNT_TO_CART",
    SET_CART = "SET_CART",
}

export interface CartAction {
    type: CartActionTypes;
    product?: Product;
    quantity?: number;
    cart?: Cart;
    productId?: number;
}

// Products

export enum ProductsActionTypes {
    SORT_HIGH_TO_LOW = "SORT_HIGH_TO_LOW",
    SORT_LOW_TO_HIGH = "SORT_LOW_TO_HIGH",
    FILTER_SELLERS = "FILTER_SELLERS",
    SET_PRODUCTS = "SET_PRODUCTS",
}

export interface ProductAction {
    type: ProductsActionTypes;
    sellersNames?: string[];
    productId?: number;
    products?: Product[];
}
