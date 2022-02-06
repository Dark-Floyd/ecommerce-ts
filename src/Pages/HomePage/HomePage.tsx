import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import productsList from '../../collectibles';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { filterSellers, sortHighToLow, sortLowToHigh } from '../../store/actions';
import ProductCards from '../../components/ProductCard/ProductCards';
import useFetchProducts from "../../hooks/useFetchProducts";
import Loading from "../../components/ui/Loading/Loading";
import { Redirect } from "react-router-dom";
import CheckBoxesFilter from '../../components/common/Filters/CheckBoxesFilter';
import SelectFilter from '../../components/common/Filters/SelectFilter';

const HomePage: React.FC = () => {
	const dispatch = useAppDispatch();
    const { loading, error } = useFetchProducts();
    const sellersNames = useAppSelector(
        (state) => state.productsReducer.allProductsSellersNames
    );

    const products = useAppSelector((state) => state.productsReducer.products);

    if (loading) return <Loading />;
   

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
				<Col sm={2} md={2} lg={2}>
					<Row>
						<Col md={12}>
							<CheckBoxesFilter
								header='Sellers'
								selectors={sellersNames}
								filter={(sellersNames) => dispatch(filterSellers(sellersNames))}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<SelectFilter header='Price' selectors={priceSelectors} />
						</Col>
					</Row>
				</Col>
				<Col sm={10} md={10} lg={10}>
					<ProductCards products={productsList} />
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
