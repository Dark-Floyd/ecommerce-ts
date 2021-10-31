import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import classes from './ProductPage.module.css';
import productsList from '../../collectibles';
import { Product } from '../../models/product';
import { useAddToCart } from '../../hooks/useAddToCart';
import { addToCart } from '../../store/actions/cart';


interface Props {
    product: Product;
}
interface ParamTypes {
	id: string;
}

const ProductPage: React.FC<Props> = (props) => {
	const history = useHistory();
	const { id } = useParams<ParamTypes>();
	const product = productsList.find((item) => Number(item.id) === Number(id));
	const {addCartProduct} = useAddToCart(props.product);

	const handleOnClick = (
        event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
        event.preventDefault();
        addCartProduct();
		
    };


	return (
		<div className={classes['background']}>
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
							<Card.Title style={{ fontSize: '5rem', margin: '2rem', fontFamily: 'monospace' }}>{product?.name}</Card.Title>
							<Card.Body>
								<Row style={{ alignItems: 'center' }}>
									<Col sm={5} md={5} lg={5}>
										<Card.Text style={{ fontSize: '2.5rem' }}>Price: {product?.price}</Card.Text>
									</Col>
									<Col sm={7} md={7} lg={7}>
										<Card.Text style={{ fontSize: '2rem', fontStyle: 'italic', display: 'inline-block' }}>
											Uploaded:{product?.uploadedDate}
										</Card.Text>
									</Col>
								</Row>

								<Row>
									<Card.Text style={{ fontSize: '2rem' }}>Description: {product?.description}</Card.Text>
									<Card.Text style={{ fontSize: '2rem' }}>Seller's name:{product?.seller}</Card.Text>
									<Card.Text style={{ fontSize: '2rem' }}>Category: {product?.category}</Card.Text>
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

export default ProductPage;
