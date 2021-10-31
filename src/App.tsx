import './App.css';
import Navbar from './components/common/CustomNavbar/CustomNavbar';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import CartPage from './Pages/CartPage/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import {store} from './store/store';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<div className='navbar'>
					<Navbar></Navbar>
				</div>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/product/:id' component={ProductPage} />
					<Route exact path='/cart' component={CartPage} />

					
				</Switch>
			</div>
		</Provider>
	);
}

export default App;
