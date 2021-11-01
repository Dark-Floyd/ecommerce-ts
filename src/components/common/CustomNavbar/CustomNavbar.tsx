import React from 'react';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import classes from './CustomNavbar.module.css';
import { useHistory } from 'react-router';
import { Cart4 } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

interface Props {
	productsAmount?: number;
}

const CustomNavbar: React.FC<Props> = (props) => {
	const history = useHistory();
	return (
		<Navbar bg='alert' variant='light' className={classes['navbar']} as={Link} to='/'>
			<Container>
				<Navbar.Brand className={classes['navbar-title']} onClick={() => history.push('/')} style={{ fontFamily: 'cursive' }}>
					<img
						alt=''
						src='https://seeklogo.com/images/T/transformers-bumble-bee-logo-8EF55E909D-seeklogo.com.png'
						width='30'
						height='30'
						className='d-inline-block align-top'
					/>{' '}
					Collectibles Express
				</Navbar.Brand>

				<Nav>
					<Nav.Link className={classes['navbar-link']} onClick={() => history.push('/cart')} as={Link} to='/cart'>
						<Cart4 />
						Cart ({props.productsAmount})
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default CustomNavbar;
