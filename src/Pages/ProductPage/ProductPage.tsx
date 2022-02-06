import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams, RouteComponentProps, useHistory } from 'react-router-dom';
import classes from './ProductPage.module.css';
import products from '../../collectibles';
import { Product } from '../../models/product';
import FullProduct from '../../components/FullProduct/FullProduct';
import GoBackButton from '../../components/ui/CustomButton/CustomButton';
import ProductImages from '../../components/FullProduct/ProductImages';
import { useQuery } from "@apollo/client";
import {
    ProductGetByIdVars,
    ProductQueries,
} from "../../graphql/queries/product/productQueries";
interface RouteParams {
	id: string;
}
interface Props extends RouteComponentProps<RouteParams> {
	getProduct: Product;
}
interface ProductsData {
    getProduct: Product;
}

const ProductPage: React.FC<Props> = (props) => {
	const { id } = useParams<RouteParams>();
	const history = useHistory();
	//const product = products.find((item) => Number(item.id) === Number(id));
	const {
        loading,
        error,
        data: product,
    } = useQuery<ProductsData, ProductGetByIdVars>(ProductQueries.getById, {
        variables: { id: +props.match.params.id },
    });

	return (
		<div>
			<Container>
				<Row>
					<Col sm={2} md={2} lg={2}>
						<GoBackButton onClick={() => history.push('/')} name={'Go Back'} />
					</Col>
				</Row>
				{product ? (
					<Row>
						<Col md={4}  className={classes['col']}>
							<ProductImages images={product.getProduct.images} />
						</Col>
						<Col md={8}>
							<FullProduct product={product.getProduct}></FullProduct>
						</Col>
					</Row>
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

export default ProductPage;
