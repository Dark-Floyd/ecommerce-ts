import { CartAction, CartActionTypes } from "./actionTypes";
import { Product } from "../../models/product";
import { Cart } from "../../models/cart";

const getCartAction = (
    type: CartActionTypes,
    options?: {
        product?: Product;
        quantity?: number;
        cart?: Cart;
        productId?: number;
    }
): CartAction => {
    return {
        type: type,
        product: options?.product,
        quantity: options?.quantity,
        cart: options?.cart,
        productId: options?.productId,
    };
};

export const addToCart = (product: Product): CartAction =>
    getCartAction(CartActionTypes.ADD_TO_CART, { product });

export const deleteFromCart = (productId: number): CartAction =>
    getCartAction(CartActionTypes.DELETE_FROM_CART, { productId });

export const changeAmountToCart = (
    product: Product,
    quantity: number
): CartAction =>
    getCartAction(CartActionTypes.CHANGE_AMOUNT_TO_CART, { product, quantity });

export const setCart = (cart: Cart): CartAction =>
    getCartAction(CartActionTypes.SET_CART, { cart });
