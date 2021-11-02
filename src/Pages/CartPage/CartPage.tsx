import React from 'react';
import CartLines from '../../components/Cart/Cart';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import classes from './CartPage.module.css';
import { useAppSelector } from '../../hooks/useAppSelector';
import GoBackButton from '../../components/ui/CustomButton/CustomButton';

const CartPage: React.FC = () => {
	const history = useHistory();
	const cart = useAppSelector((state) => state.cartReducer);
	const totalPrice = cart.products.reduce((prevPrice, product) => prevPrice + product.amount * product.product.price, 0);
	return (
		<div className={classes['background']}>
			<Container>
				<Row>
					<Col sm={2} md={2} lg={2}>
						<GoBackButton onClick={() => history.push('/')} name={'Go Back'} />
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={12} lg={12}>
						<Card>
							<Card.Title className={classes['card-title']}>Shopping Cart</Card.Title>
							<CartLines cart={cart}></CartLines>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col sm={4} md={4} lg={4}>
						<Card className={classes['checkout-card']}>
							<Card.Title style={{ fontSize: '2rem' }}>Total Price</Card.Title>
							<Card.Body style={{ fontSize: '1.5rem' }}>{totalPrice}$</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default CartPage;
