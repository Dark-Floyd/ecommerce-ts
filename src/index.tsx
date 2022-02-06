import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AlertTemplate from 'react-alert-template-basic';
import { positions, Provider as AlertProvider } from 'react-alert';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const alertOptions = {
	timeout: 5000,
	position: positions.BOTTOM_CENTER,
};

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
	cache: new InMemoryCache(),
});

const app = (
	<AlertProvider template={AlertTemplate} {...alertOptions}>
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</ApolloProvider>
	</AlertProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
