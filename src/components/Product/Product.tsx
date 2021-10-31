import React from 'react';
import { Product } from '../../models/product';

interface Props {
	product: Product;
}

const Product: React.FC<Props> = (props) => {
	return (
		<div>
			{props.product.additionalInfo}
			{props.product.id}
			{props.product.name}
			{props.product.uploadedDate}
			{props.product.description}
			{props.product.price}
			{props.product.seller}
			{props.product.category}
		</div>
	);
};

export default Product;
