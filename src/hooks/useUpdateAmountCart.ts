import { useAppDispatch } from "./useAppDispatch";
import { useMutation } from "@apollo/client";
import { changeAmountToCart } from "../store/actions";
import { CartMutations } from "../graphql/mutations/cart/cartMutations";
import { ProductCart } from "../models/cart";
import { useAlert } from "react-alert";

interface CartProductData {
    updateCartProductAmount: ProductCart;
}

interface UpdateProductCartVars {
    updateCartDto: { productId: number; amount: number };
}

export const useUpdateAmountCart = (productCart: ProductCart) => {
    const dispatch = useAppDispatch();
    const alert = useAlert();
    const [
        updateCartProductQuantity,
        {
            loading: updateCartProductAmountLoading,
            error: updateCartProductAmountError,
            data: updatedCartProduct,
        },
    ] = useMutation<CartProductData, UpdateProductCartVars>(
        CartMutations.updateCartProductAmount
    );

    const onSuccessUpdate = (productCartToDispatch: ProductCart) => {
        dispatch(
            changeAmountToCart(
                productCartToDispatch.product,
                productCartToDispatch.amount
            )
        );
        alert.success("Updated Successfully");
    };

    const updateCartProductAmount = (amount: number) => {
        updateCartProductQuantity({
            variables: {
                updateCartDto: {
                    productId: productCart.product.id,
                    amount,
                },
            },
        }).then(() =>
            onSuccessUpdate({ product: productCart.product, amount })
        );
    };

    return {
        updateCartProductAmount,
        updateCartProductAmountLoading,
        updateCartProductAmountError,
        updatedCartProduct,
    };
};
