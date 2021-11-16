import { useAppDispatch } from "./useAppDispatch";
import { useEffect } from "react";
import { ProductCart } from "../models/cart";
import { setCart } from "../store/actions/cart";

interface CartData {
    getAllCart: ProductCart[];
}
