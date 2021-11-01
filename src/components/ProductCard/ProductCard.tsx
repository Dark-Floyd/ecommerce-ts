import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useAddToCart } from '../../hooks/useAddToCart';
import { Product } from '../../models/product';
import ProductImages from '../FullProduct/ProductImages';
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
			<Card.Img className={classes['image']} variant='top' 	
							alt='Product' />
							{/* <ProductImages images={props.product.images}/> */}


		
			<Card.Body>
				<Card.Title style={{ fontSize: '2rem' }}>{props.product.name} </Card.Title>
				<Card.Text style={{ fontSize: '1.5rem' }}>{props.product.price}</Card.Text>
				<Card.Text>{props.product.description}</Card.Text>
				<Row style={{ margin: 'auto', display: 'table' }}>
					<Col>
						<Button className={classes['button']} variant='primary' onClick={handleOnClick}>
							Add to Cart
						</Button>
						<Button className={classes['button']} variant='primary' onClick={() => history.push('/product/' + props.product.id)}>
							View
						</Button>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
