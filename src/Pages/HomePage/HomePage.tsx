import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Row, Col, Container,  } from 'react-bootstrap';
//import classes from './HomePage.module.css';
import productsList from '../../collectibles';
import CheckBoxesFilter from '../../components/common/Filters/CheckBoxesFilter';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { filterSellers, sortHighToLow, sortLowToHigh } from '../../store/actions';
import SelectFilter from '../../components/common/Filters/SelectFilter';


const HomePage: React.FC = () => {

	const dispatch = useAppDispatch();
    
    const sellersNames = useAppSelector(
        (state) => state.productsReducer.allProductsSellersNames
    );

    const products = useAppSelector((state) => state.productsReducer.products);

    
    const priceSelectors = [
        {
            name: "Low to high",
            onClick: () => dispatch(sortLowToHigh()),
        },
        {
            name: "High to low",
            onClick: () => dispatch(sortHighToLow()),
        },
    ];

    return (
		<Container>
			<Row>
			{/* <Button>Change Layout</Button> */}
				<Col sm={2} md={2} lg={2}>
				
				<Row>
                        <Col md={12}>
                            <CheckBoxesFilter
                                header="Sellers"
                                selectors={sellersNames}
                                filter={(sellersNames) =>
                                    dispatch(filterSellers(sellersNames))
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <SelectFilter
                                header="Price"
                                selectors={priceSelectors}
                            />
                        </Col>
                    </Row>
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
