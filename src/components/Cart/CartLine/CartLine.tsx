import React from 'react';
import classes from './CartLine.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductCart } from '../../../models/cart';
import CounterInput from '../../common/CounterInput/CounterInput';
import { useDeleteFromCart } from '../../../hooks/useDeleteFromCart';
import { useUpdateAmountCart } from '../../../hooks/useUpdateAmountCart';

interface Props {
	productCart: ProductCart;
}
const CartLine: React.FC<Props> = (props) => {
	const { deleteCartProduct, deleteCartProductLoading, deleteProductError } = useDeleteFromCart(props.productCart.product.id);
	const { updateCartProductAmount, updateCartProductAmountLoading, updateCartProductAmountError } = useUpdateAmountCart(props.productCart);

	const onQuantityChange = (value: number) => {
		updateCartProductAmount(value);
	};

	const onTrash = () => {
		deleteCartProduct();
	};

	return (
		<div>
			<Container className={classes['product-card']}>
				<Row className={classes['product-col']}>
					<Col sm={2} md={2} lg={2}>
						<img
							src={
								props.productCart.product.images.length
									? props.productCart.product.images[0]
									: `${process.env.PUBLIC_URL}/images/noImageAvailable.jfif`
							}
							alt='Product'
							className={classes['product-image']}
						/>
					</Col>
					<Col sm={6} md={6} lg={6}>
						<Row style={{ fontWeight: 'bold' }}>{props.productCart.product.name}</Row>
						<Row>{props.productCart.product.description}</Row>
					</Col>
					<Col sm={1} md={1} lg={1}>
						{props.productCart.product.price}$
					</Col>
					<Col sm={2} md={2} lg={2}>
						<CounterInput inputValue={props.productCart.amount} onChange={onQuantityChange}></CounterInput>
					</Col>
					<Col sm={1} md={1} lg={1}>
						<button className={classes['trash-button']}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								fill='currentColor'
								className='bi bi-trash'
								viewBox='0 0 16 16'
								onClick={onTrash}
								style={{ display: 'block' }}
							>
								<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
								<path
									fill-rule='evenodd'
									d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
								/>
							</svg>
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default CartLine;
