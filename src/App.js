import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Rss from './Components/Rss'

export default function App() {
	
	//<Route path='/rss' element={ <RssList />} />
	return (
		<Routes>
			<Route path="/" element={ <Home /> } />
			<Route path="*" element={ <NotFound /> } />
			<Route path="/rss/:id" element={ <Rss /> } />
		</Routes>
	)
}

