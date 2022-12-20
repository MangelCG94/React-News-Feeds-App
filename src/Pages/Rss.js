import React from 'react'
import { useParams } from 'react-router-dom'
import { LOCAL_STORAGE_KEY } from './Home'
import axios from 'axios'

export default function Rss() {
	const { id } = useParams()

	//Getting the array and filtering it, then taking the object inside
	const currentFeed = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		.filter(feed => feed.id === id)[0]
	
	//use axios here
	
	return (
		<div>
			<h1>Sitio { currentFeed.link }</h1>
		</div>
	)
}
