import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import Header from './Components/Header'
import Footer from './Components/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { RssProvider } from './Contexts/RssContexts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RssProvider>
			<BrowserRouter>
				<Header />
				<App />
				<Footer />
			</BrowserRouter>
		</RssProvider>
	</React.StrictMode>
);

