import { Card } from 'react-bootstrap';
import { useParams, RouteComponentProps, withRouter } from 'react-router-dom';
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

const ProductPage: React.FC<Props> = ({match}) => {
	const { id } = useParams<RouteParams>();

	const product = products.find((item) => Number(item.id) === Number(id +match.params.id));
	
	return (
		<div className={classes['background']}>
			{product ? (
				<FullProduct product={product}></FullProduct>
			) : (
				<Card>
					<Card.Body>
						<Card.Title>product not found</Card.Title>
					</Card.Body>
				</Card>
			)}
		</div>
	);
};

export default withRouter(ProductPage);
