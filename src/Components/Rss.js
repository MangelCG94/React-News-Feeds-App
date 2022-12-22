import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFeeds } from '../Contexts/RssContexts'


export default function Rss() {
	const { id } = useParams()

	const { getFeeds, getContentsFeed } = useFeeds()

	const currentFeed = getFeeds(id)
	const news = getContentsFeed(id)
	
	useEffect(() => {
		document.title = currentFeed[0].title
	})
	
	let items = news[0]['contents']
	let date_options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }


	return (
		<div className='content container news'>
			<h2>{ currentFeed.title }</h2>
			{
				items.map(item => {
					let item_date = new Date(item.pubDate)
					let string_item_date = item_date.toLocaleDateString("es-ES", date_options)
					let date = string_item_date.charAt(0).toUpperCase() + string_item_date.slice(1);
					return (
						<>
							<h3><a href={item.link}>{item.title}</a></h3>
							<div className='date'>{date }</div>
							<div className='contentNews'>
								{item.content? item.content.replace( /(<([^>]+)>)/ig, '') : ""}
							</div>
							<div className='linkNews'><a href={item.link}>Ir a la noticia</a></div>
						</>
					)
				})
        	}
		</div>
	)
}
