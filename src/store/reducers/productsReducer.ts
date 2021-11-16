import { ProductAction, ProductsActionTypes } from "../actions/actionTypes";
import { Product } from "../../models/product";
import { EnumDictionary } from "../../models/types/enumDictionary";

interface ProductState {
    allProducts: Product[];
    products: Product[];
    allProductsSellersNames: { [sellerName: string]: number };
}

const initialState: ProductState = {
    allProducts: [],
    products: [],
    allProductsSellersNames: {},
};

const sortFromLowToHigh = (state: ProductState): ProductState => {
    return {
        ...state,
        products: [...state.products].sort((p1, p2) => p1.price - p2.price),
    };
};

const sortFromHighToLow = (state: ProductState): ProductState => {
    return {
        ...state,
        products: [...state.products].sort((p1, p2) => p2.price - p1.price),
    };
};

const filterSellers = (
    state: ProductState,
    sellersNames: string[]
): ProductState => {
    return {
        ...state,
        products: state.allProducts.filter((product) =>
            sellersNames.includes(product.seller.name)
        ),
    };
};

const setProducts = (products: Product[]): ProductState => {
    const allProductsSellersNames: { [sellerName: string]: number } = {};
    products.forEach(
        (product) => (allProductsSellersNames[product.seller.name] = 0)
    );
    products.map((product) => allProductsSellersNames[product.seller.name]++);

    return {
        allProducts: [...products],
        products: [...products],
        allProductsSellersNames: allProductsSellersNames,
    };
};

const reducerMap: EnumDictionary<
    ProductsActionTypes,
    | ((state: ProductState) => ProductState)
    | ((state: ProductState, action: ProductAction) => ProductState)
> = {
    [ProductsActionTypes.SORT_LOW_TO_HIGH]: (
        state: ProductState
    ): ProductState => sortFromLowToHigh(state),
    [ProductsActionTypes.SORT_HIGH_TO_LOW]: (
        state: ProductState
    ): ProductState => sortFromHighToLow(state),
    [ProductsActionTypes.FILTER_SELLERS]: (
        state: ProductState,
        action: ProductAction
    ): ProductState => filterSellers(state, action.sellersNames!),
    [ProductsActionTypes.SET_PRODUCTS]: (
        state: ProductState,
        action: ProductAction
    ): ProductState => setProducts(action.products!),
};

const productsReducer = (
    state: ProductState = initialState,
    action: ProductAction
): ProductState => {
    if (reducerMap[action.type]) {
        return reducerMap[action.type](state, action);
    }

    return { ...state };
};

export default productsReducer;
