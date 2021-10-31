import React from 'react';
import { Card } from 'react-bootstrap';
import classes from './Category.module.css'

interface CategoryProps {
	name: string;
	subcategory?: string;
}

const Category: React.FC<CategoryProps> = ({ name, subcategory }) => {
	return (
		<div>
			<Card className={classes['card']} style={{ width: '20rem' ,height: '25rem' }}>
			<Card.Body>
				<Card.Title className={classes['card-title']} >{name}</Card.Title>
				<Card.Text>{subcategory}</Card.Text>
			
			
			</Card.Body>
		</Card>
		</div>
	);
};

export default Category;
