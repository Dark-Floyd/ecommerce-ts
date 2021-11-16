import './App.css';
import CustomNavbar from './components/common/CustomNavbar/CustomNavbar';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import CartPage from './Pages/CartPage/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppSelector } from './hooks/useAppSelector';

function App() {
	const amountOfProducts = useAppSelector((state) => state.cartReducer.products.length);
	return (
		<div className='App'>
			<div className='navbar'>
				<CustomNavbar productsAmount={amountOfProducts} />{' '}
			</div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/product/:id' component={ProductPage} />
				<Route exact path='/cart' component={CartPage} />
			</Switch>
		</div>
	);
}

export default App;
