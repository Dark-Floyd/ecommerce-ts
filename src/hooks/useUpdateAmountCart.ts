import { useAppDispatch } from './useAppDispatch';
import { changeAmountToCart } from '../store/actions';
import { ProductCart } from '../models/cart';
import { useAlert } from 'react-alert';



export const useUpdateAmountCart = (productCart: ProductCart) => {
	const dispatch = useAppDispatch();
	const updateCartProduct = (amount: number) => dispatch(changeAmountToCart(productCart.product, amount)
    
    );
    console.log(productCart.product);
    
    

	return {updateCartProduct};
};
