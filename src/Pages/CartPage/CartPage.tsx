import React from 'react';
import CartLines from '../../components/Cart/Cart';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import classes from './CartPage.module.css';
import { useAppSelector } from '../../hooks/useAppSelector';

const CartPage: React.FC = () => {
	const history = useHistory();
	const cart = useAppSelector((state) => state.cartReducer);
	return (
		<div className={classes['background']}>
			<Container>
				<Row>
					<Col sm={2} md={2} lg={2}>
						<Button onClick={() => history.push('/')} className={classes['button']} style={{ fontWeight: 'bold' }}>
							Go Back
						</Button>
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={12} lg={12}>
						<Card style={{ backgroundColor: '#eeebd9', borderRadius: '8px',borderWidth:'2px',height:'40rem',width:'100rem'}}>
							<Card.Title
								style={{
									backgroundColor: '#B11226 ',
									height: '5rem',
									color: 'white',
									fontSize: '2.5rem',
									borderTopLeftRadius: '8px',
									borderTopRightRadius: '8px',
									textAlign: 'center',
                                    
								}}
							>
								Shopping Cart
							</Card.Title>

							<CartLines cart={cart}></CartLines>
						</Card>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</div>
	);
};

export default CartPage;
