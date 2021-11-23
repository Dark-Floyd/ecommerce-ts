import { useAppDispatch } from "./useAppDispatch";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { CartQueries } from "../graphql/queries/cart/cartQueries";
import { ProductCart } from "../models/cart";
import { setCart } from "../store/actions/cart";

interface CartData {
    getAllCart: ProductCart[];
}

export const useFetchCart = () => {
    const dispatch = useAppDispatch();
    const {
        data: cart,
        loading,
        error,
    } = useQuery<CartData>(CartQueries.getAll);

    useEffect(() => {
        if (cart) {
            dispatch(setCart({ products: cart.getAllCart }));
        }
    }, [cart, dispatch]);

    return { loading, error, cart };
};

export default useFetchCart;
