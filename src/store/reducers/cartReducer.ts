import { Cart, ProductCart } from "../../models/cart";
import { CartAction, CartActionTypes } from "../actions/actionTypes";
import { EnumDictionary } from "../../models/types/enumDictionary";

const initialState: Cart = {
    products: [],
};

const addToCart = (state: Cart, action: CartAction): Cart => {
    console.log(action)
    const updatedProducts = [...state.products];

    const product = state.products.find(
        (productCart) => productCart.product.id === action.product!.id
    );

    let updatedProduct: ProductCart;

    if (product) {
        // updatedProduct = updatedProducts[productIndex] ;
        product.amount++;
        // updatedProducts[productIndex] = updatedProduct;
    } else {
        
        updatedProduct = {
            amount: 1,
            product: { ...action.product! },
        };

        updatedProducts.push(updatedProduct);
    }

    return {
        ...state,
        products: updatedProducts,
    };
};

const deleteFromCart = (state: Cart, action: CartAction): Cart => {
    const updatedProducts = [...state.products];

    const productIndex = state.products.findIndex(
        (productCart) => productCart.product.id === action.productId!
    );

    if (productIndex !== -1) {
        updatedProducts.splice(productIndex, 1);
    }

    return {
        ...state,
        products: updatedProducts,
    };
};

const changeAmountToCart = (state: Cart, action: CartAction): Cart => {
    const updatedProducts = [...state.products];

    const productIndex = state.products.findIndex(
        (productCart) => productCart.product.id === action.product!.id
    );

    let updatedProduct: ProductCart;

    // Validating the data
    if (
        productIndex !== -1 &&
        action.quantity &&
        action.quantity >= 0 &&
        action.quantity <= 100
    ) {
        updatedProduct = { ...updatedProducts[productIndex] };
        updatedProduct.amount = action.quantity;
        updatedProducts[productIndex] = updatedProduct;
    }

    return {
        ...state,
        products: updatedProducts,
    };
};

const setCart = (action: CartAction): Cart => {
    return {
        products: [...action.cart!.products],
    };
};

const reducerMap: EnumDictionary<
    CartActionTypes,
    (state: Cart, action: CartAction) => Cart
> = {
    [CartActionTypes.ADD_TO_CART]: (state: Cart, action: CartAction): Cart =>
        addToCart(state, action),
    [CartActionTypes.DELETE_FROM_CART]: (
        state: Cart,
        action: CartAction
    ): Cart => deleteFromCart(state, action),
    [CartActionTypes.CHANGE_AMOUNT_TO_CART]: (
        state: Cart,
        action: CartAction
    ): Cart => changeAmountToCart(state, action),
    [CartActionTypes.SET_CART]: (state: Cart, action: CartAction): Cart =>
        setCart(action),
};

const cartReducer = (state = initialState, action: CartAction): Cart => {
    if (reducerMap[action.type]) {
        return reducerMap[action.type](state, action);
    }

    return { ...state };
};

export default cartReducer;
