import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<App />
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);

