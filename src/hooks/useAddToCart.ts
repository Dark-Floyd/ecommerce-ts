import { useAppDispatch } from "./useAppDispatch";
import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { addToCart } from "../store/actions";
import { CartMutations } from "../graphql/mutations/cart/cartMutations";
import { ProductCart } from "../models/cart";
import { useAlert } from "react-alert";
import { Product } from "../models/product";

interface CartProductData {
    insertProductToCart: ProductCart;
}

interface AddProductCartVars {
    insertCartDto: {
        productId: number;
        amount: number;
    };
}

export const useAddToCart = (product: Product) => {
    const dispatch = useAppDispatch();
    const alert = useAlert();
    const [
        addCartProduct,
        {
            loading: addCartProductLoading,
            error: addCartProductError,
            data: addedCartProduct,
        },
    ] = useMutation<CartProductData, AddProductCartVars>(
        CartMutations.insertCartProduct
    );

    useEffect(() => {
        if (addedCartProduct) {
            dispatch(addToCart(product));
            alert.success("Added Successfully");
        }
    }, [product, addedCartProduct, dispatch, alert]);

    return {
        addCartProduct,
        addCartProductLoading,
        addCartProductError,
        addedCartProduct,
    };
};
