import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useAddToCart } from '../../hooks/useAddToCart';
import { Product } from '../../models/product';
import classes from './FullProduct.module.css';

interface Props {
	product: Product;
}

const FullProduct: React.FC<Props> = (props) => {
	const { addCartProduct } = useAddToCart(props.product);
	const handleOnClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		event.preventDefault();
		addCartProduct();
	};
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<Card>
							<Card.Title style={{ fontSize: '5rem', margin: '2rem', fontFamily: 'monospace' }}>{props.product.name}</Card.Title>
							<Card.Body>
								<Row style={{ alignItems: 'center' }}>
									<Col sm={5} md={5} lg={5}>
										<Card.Text style={{ fontSize: '2.5rem' }}>Price: {props.product.price}</Card.Text>
									</Col>
									<Col sm={7} md={7} lg={7}>
										<Card.Text style={{ fontSize: '2rem', fontStyle: 'italic', display: 'inline-block' }}>
											Uploaded: {props.product.uploadedDate.toString()}
										</Card.Text>
									</Col>
								</Row>

								<Row>
									<Card.Text style={{ fontSize: '2rem' }}>Description: {props.product.description}</Card.Text>
									<Card.Text style={{ fontSize: '2rem' }}>Seller's name:{props.product.seller.name}</Card.Text>
									<Card.Text style={{ fontSize: '2rem' }}>Category: {props.product.category.name}</Card.Text>
									{props.product.additionalInfo?.map(({ title, description }, i) => {
										return (
											<div key={i}>
												<Card.Text style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'left', paddingLeft: '2rem' }}>
													{title}
												</Card.Text>
												<Card.Text style={{ fontSize: '2rem', textAlign: 'left', paddingLeft: '2rem' }}>
													{description}
												</Card.Text>
											</div>
										);
									})}
								</Row>
							</Card.Body>
							<Row>
								<Col sm={5} md={5} lg={5}>
									<Button
										className={classes['button']}
										style={{ fontWeight: 'bold', width: '12rem', height: '5rem' }}
										onClick={handleOnClick}
									>
										Add to Cart
									</Button>
								</Col>
								<Col sm={7} md={7} lg={7}></Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default FullProduct;
