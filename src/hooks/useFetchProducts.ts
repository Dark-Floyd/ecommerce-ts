import { useQuery } from "@apollo/client";
import { Product } from "../models/product";
import { useAppDispatch } from "./useAppDispatch";
import { ProductQueries } from "../graphql/queries/product/productQueries";
import { setProducts } from "../store/actions/products";
import { useEffect } from "react";

interface GetAllProductsData {
    getAllProducts: Product[];
}

export const useFetchProducts = () => {
    const dispatch = useAppDispatch();
    const {
        loading,
        error,
        data: productsData,
    } = useQuery<GetAllProductsData>(ProductQueries.getAll);

    useEffect(() => {
        if (productsData) {
            dispatch(setProducts(productsData.getAllProducts));
        }
    }, [productsData, dispatch]);

    return { loading, error, productsData };
};

export default useFetchProducts;
