import React, { useEffect, useRef } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFeeds } from '../Contexts/RssContexts'





export default function Home() {
	//Titulo en la pestaña
	useEffect(() => {
		document.title = "Inicio"
	}, [])

	//Funciones CRUD
	const { addFeeds, deleteFeeds, getFeeds } = useFeeds()
	const feeds = getFeeds()

	//Referencia al input para crear feeds
	const feedsRef = useRef(null)

	function handleInitialValue() {
		addFeeds(encodeURI('https://hnrss.org/frontpage'))
		addFeeds(encodeURI('https://www.techradar.com/rss/news/software'))
	}

	//coger el link del input
	function handleAddFeed() {
		const link = feedsRef.current.value

		//Si no hay link no hagas nada
		if(link === '') {
			return ;
		}
		let final_link = encodeURI(link)
		addFeeds(final_link)

		feedsRef.current.value = ''
	}

	function handleDelete(id) {
		console.log(id)
		deleteFeeds(id)
	}

	return (
	<>
		<div className='content cards'>
			<h1>Feeds RSS</h1>
			{feeds.length > 0? feeds.map(feed => {
				return (
					<div className='card'>
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>
									<Link to={`/rss/${feed.id}`}>{feed.title}</Link>
								</Card.Title>
								<Button
									onClick={() => handleDelete(feed.id)} 
									variant="danger">Borrar 🗑</Button>
							</Card.Body>
						</Card>
					</div>
				)
			}) :"" }
			<div className='create'>
				<input ref={feedsRef} type="text" placeholder="Introduzca un link" />
				<Button onClick={handleAddFeed}>Añadir Feed RSS</Button>
				<Button onClick={handleInitialValue}>Valores iniciales</Button>
			</div>
		</div>
    </>
	)
}
