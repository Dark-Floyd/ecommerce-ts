import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useAddToCart } from '../../hooks/useAddToCart';
import { Product } from '../../models/product';
import CustomButton from '../ui/CustomButton/CustomButton';
import classes from './ProductCard.module.css';

interface Props {
	product: Product;
}

const ProductCard: React.FC<Props> = (props) => {
	const history = useHistory();
	const { addCartProduct } = useAddToCart(props.product);
	const handleOnClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		event.preventDefault();
		addCartProduct();
	};
	return (
		<Card className={classes['card']}>
			<Card.Img className={classes['image']} variant='top' src={props.product.images[0]} alt='Product' />
			<Card.Body>
				<Card.Title style={{ fontSize: '2rem' }}>{props.product.name} </Card.Title>
				<Card.Text style={{ fontSize: '1.5rem' }}>{props.product.price}</Card.Text>
				<Card.Text>{props.product.description}</Card.Text>
				<Row style={{ margin: 'auto', display: 'table' }}>
					<Col>
						<Button className={classes['button']} variant='primary' onClick={handleOnClick}>
							Add to Cart
						</Button>
						<CustomButton onClick={() => history.push('/product/' + props.product.id)} name={'View'} />
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
