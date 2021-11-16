import { useAppDispatch } from "./useAppDispatch";
import { deleteFromCart } from "../store/actions";

   
export const useDeleteFromCart = (id: number) => {
    const dispatch = useAppDispatch();
    const deleteProductFromCart = () => dispatch(deleteFromCart(id))

    return { deleteProductFromCart };
};
