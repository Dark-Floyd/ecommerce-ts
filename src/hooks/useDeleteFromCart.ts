import { useAppDispatch } from "./useAppDispatch";
import { useMutation } from "@apollo/client";
import { deleteFromCart } from "../store/actions";
import { CartMutations } from "../graphql/mutations/cart/cartMutations";
import { ProductCart } from "../models/cart";
import { useAlert } from "react-alert";

interface CartProductData {
    deleteCartProduct: ProductCart;
}

interface DeleteProductCartVars {
    id: number;
}

export const useDeleteFromCart = (id: number) => {
    const dispatch = useAppDispatch();
    const alert = useAlert();
    const [
        deleteCartProductData,
        { loading: deleteCartProductLoading, error: deleteProductError },
    ] = useMutation<CartProductData, DeleteProductCartVars>(
        CartMutations.deleteCartProduct
    );

    const onSuccess = (productId: number) => {
        dispatch(deleteFromCart(productId));
        alert.success("Deleted Successfully");
    };

    const deleteCartProduct = () => {
        deleteCartProductData({ variables: { id } }).then(() => onSuccess(id));
    };

    return { deleteCartProduct, deleteCartProductLoading, deleteProductError };
};
