import React from 'react';
import { Button } from 'react-bootstrap';
import classes from './CustomButton.module.css';

interface Props {
	onClick: () => void;
	name: string;
}
const CustomButton: React.FC<Props> = ({ onClick,name }) => {
	return (
		<React.Fragment>
			<Button className={classes['button']} onClick={onClick}>
				{name}
			</Button>
		</React.Fragment>
	);
};

export default CustomButton;
