import React, { useEffect, useRef, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import {v4 as uuidv4} from 'uuid';
import { Link } from 'react-router-dom';
import axios from 'axios'


//Nombre de la variable del almacenamiento local
export const LOCAL_STORAGE_KEY = 'feedsApp.feeds';

export default function Home() {
	//Titulo en la pestaña
	useEffect(() => {
		document.title = "Inicio"
	}, [])

	//Array con su setter y valores iniciales
	const [ feeds, setFeeds ] = useState([
		{id: uuidv4(), title: "Hacker News: Front Page", link:'https://hnrss.org/frontpage'},
		{id: uuidv4(), title: 'TechRadar - All the latest technology news', link:'https://www.techradar.com/rss/news/software'},
	])

	//Referencia al input para crear feeds
	const feedsRef = useRef(null)

	//Actualizando local storage
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feeds))
	}, [feeds])

	//Chequeando si hay cosas guardadas en el local storage
	//Si las hay, actualiza el estado de 'feed'
	useEffect(() => {
		const storedFeeds = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

		if(storedFeeds) {
			setFeeds(storedFeeds)
		}
	}, [])

	function handleAddFeed() {
		const link = feedsRef.current.value
		
		if(link === '') {
			return ;
		}

		//use axios here
		/* axios.get('/api/data')
		.then(response => {
			// handle the response data
		})
		.catch(error => {
			// handle the error
		}); */

		setFeeds(prevFeeds => {
			return [...prevFeeds, { 
				id: uuidv4(), 
				link: link
			}]
		})

		feedsRef.current.value = '';
	}

	function handleDelete(id) {
		const newFeeds = feeds.filter(feed => feed.id !== id)
		setFeeds(newFeeds)
	}

	return (
	<>
		<h1>Inicio - Tarjetas RSS aqui</h1>
		{feeds.length > 0? feeds.map(feed => {
			return (
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>
							<Link to={`/rss/${feed.id}`}>{feed.link}</Link>
						</Card.Title>
						<Button
							onClick={() => handleDelete(feed.id)} 
							variant="danger">Borrar</Button>
					</Card.Body>
				</Card>
			)
		}) :"" }
		<input ref={feedsRef} type="text" placeholder="Introduzca un link" />
		<Button onClick={handleAddFeed}>Añadir Feed RSS</Button>
    </>
	)
}
