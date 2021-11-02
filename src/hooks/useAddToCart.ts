import { useAppDispatch } from './useAppDispatch';
import { addToCart } from '../store/actions/cart';
import { Product } from '../models/product';

export const useAddToCart = (product: Product) => {
	const dispatch = useAppDispatch();
	const addCartProduct = () => dispatch(addToCart(product));
	return { addCartProduct };
};
