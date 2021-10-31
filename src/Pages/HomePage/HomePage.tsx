import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Row, Col, Container,  } from 'react-bootstrap';
//import classes from './HomePage.module.css';
import Category from '../../components/common/Category/Category';
import productsList from '../../collectibles';


const HomePage: React.FC = () => {

	
    return (
		<Container>
			<Row>
			{/* <Button>Change Layout</Button> */}
				<Col sm={2} md={2} lg={2}>
				
					{productsList.map(({ name, description }, i) => (
						<Category key={i} name={name} subcategory={description}></Category>
					))}
				</Col>
				
				<Col sm={10} md={10} lg={10}>
					
					{productsList.map((product) => (
						<ProductCard key={product.id} product={product} ></ProductCard>
					))}
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
