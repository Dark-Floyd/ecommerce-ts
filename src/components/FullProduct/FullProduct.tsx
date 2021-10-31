import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAddToCart } from '../../hooks/useAddToCart';
import { Product } from '../../models/product';
import classes from './FullProduct.module.css';

interface Props {
	product: Product;
}

const FullProduct: React.FC<Props> = (props) => {

	const {addCartProduct} = useAddToCart(props.product);
	const history = useHistory();
	const handleOnClick = (
        event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
        event.preventDefault();
        addCartProduct();
		
    };
	return (
		<div>
		<Container>
				<Row>
					<Col sm={2} md={2} lg={2}>
						<Button onClick={() => history.push('/')} className={classes['button']} style={{ fontWeight: 'bold' }}>
							Go Back
						</Button>
					</Col>
					<Col sm={10} md={10} lg={10}></Col>
				</Row>

				<Row>
					<Col sm={5} md={5} lg={5}>
						<Card className={classes['img-card']}>
							<Card.Img className={classes['image']} variant='top'  />
							<Card.Text>Gallery</Card.Text>
						</Card>
					</Col>
					<Col sm={7} md={7} lg={7}>
						<Card>
							<Card.Title style={{ fontSize: '5rem', margin: '2rem', fontFamily: 'monospace' }}>{props.product.name}</Card.Title>
							<Card.Body>
								<Row style={{ alignItems: 'center' }}>
									<Col sm={5} md={5} lg={5}>
										<Card.Text style={{ fontSize: '2.5rem' }}>Price: {props.product.price}</Card.Text>
									</Col>
									<Col sm={7} md={7} lg={7}>
										<Card.Text style={{ fontSize: '2rem', fontStyle: 'italic', display: 'inline-block' }}>
											Uploaded:{props.product.uploadedDate}
										</Card.Text>
									</Col>
								</Row>

								<Row>
									<Card.Text style={{ fontSize: '2rem' }}>Description: {props.product.description}</Card.Text>
									<Card.Text style={{ fontSize: '2rem' }}>Seller's name:{props.product.seller}</Card.Text>
									<Card.Text style={{ fontSize: '2rem' }}>Category: {props.product.category}</Card.Text>
									{/* {product?.additionalInfo.map(({ title, description }, i) => {
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
									})} */}
								</Row>
							</Card.Body>
							<Row>
								<Col sm={5} md={5} lg={5}>
									<Button className={classes['button']} style={{ fontWeight: 'bold',width:'12rem',height:'5rem' }} onClick={handleOnClick}>
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
