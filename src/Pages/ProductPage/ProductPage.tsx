import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams, RouteComponentProps, withRouter, useHistory } from 'react-router-dom';
import classes from './ProductPage.module.css';
import products from '../../collectibles';
import { Product } from '../../models/product';
import FullProduct from '../../components/FullProduct/FullProduct';
interface RouteParams {
	id: string;
}
interface Props extends RouteComponentProps<RouteParams> {
	getProduct: Product;
}

const ProductPage: React.FC<Props> = (props) => {
	const { id } = useParams<RouteParams>();
	const history = useHistory();
	const product = products.find((item) => Number(item.id) === Number(id));
	

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
				{product ? (
					<FullProduct product={product}></FullProduct>
				) : (
					<Card>
						<Card.Body>
							<Card.Title>PRODUCT NOT FOUND</Card.Title>
						</Card.Body>
					</Card>
				)}
			</Container>
		</div>
	);
};

export default withRouter(ProductPage);
