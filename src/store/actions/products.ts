import { ProductAction, ProductsActionTypes } from "./actionTypes";
import { Product } from "../../models/product";

const getProductsAction = (
    type: ProductsActionTypes,
    options?: {
        sellersNames?: string[];
        products?: Product[];
    }
): ProductAction => {
    return {
        type: type,
        sellersNames: options?.sellersNames,
        products: options?.products,
    };
};
export const sortLowToHigh = (): ProductAction =>
    getProductsAction(ProductsActionTypes.SORT_LOW_TO_HIGH);

export const sortHighToLow = (): ProductAction =>
    getProductsAction(ProductsActionTypes.SORT_HIGH_TO_LOW);

export const filterSellers = (sellersNames: string[]): ProductAction =>
    getProductsAction(ProductsActionTypes.FILTER_SELLERS, {
        sellersNames: sellersNames,
    });

export const setProducts = (products: Product[]): ProductAction => {
    return getProductsAction(ProductsActionTypes.SET_PRODUCTS, { products });
};
