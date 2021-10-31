import React from 'react';
import CartLine from './CartLine/CartLine';
import { Cart } from '../../models/cart';
import { Col, Container } from 'react-bootstrap';

interface Props {
	cart: Cart;
}

const CartLines: React.FC<Props> = (props) => {
	return (
		<Container>
			{props.cart.products.map((cartProduct) => (
				<Col md='12'>
					<CartLine key={cartProduct.product.id} productCart={cartProduct} />
				</Col>
			))}
		</Container>
	);
};

export default CartLines;
