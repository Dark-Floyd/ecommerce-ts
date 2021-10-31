import { Cart, ProductCart } from "../models/cart";

import { useAppDispatch } from "./useAppDispatch";
import { useEffect, useState } from "react";
import { addToCart } from "../store/actions/cart";
import { Product } from "../models/product";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";


interface AddProductCartVars {
    insertCartDto: {
        productId: number;
        amount: number;
    };
}

interface CardProductData {
    insertProductToCart: ProductCart
}


export const useAddToCart = (product: Product) => {
    console.log('here')
    console.log(product)
    const dispatch = useAppDispatch();
    //const alert = useAlert();
    const addCartProduct = () => dispatch(addToCart(product));




    return {addCartProduct};
    
};




