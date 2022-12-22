import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFeeds } from '../Contexts/RssContexts'


export default function Rss() {
	const { id } = useParams()

	const { getFeeds, getContentsFeed } = useFeeds()

	const currentFeed = getFeeds(id)
	const news = getContentsFeed(id)
	
	useEffect(() => {
		document.title = currentFeed
	})
	
	let items = news[0]['contents']
	console.log(items)

	return (
		<div>
			<h2>{ currentFeed.title }</h2>
			{
				items.map(item => {
					return (
						<>
							<h3><a href={item.link}>{item.title}</a></h3>
							<div className='date'>{item.pubDate}</div>
							<div className='contentNews'>
								{item.content? item.content : ""}
							</div>
							<div className='linkNews'><a href={item.link}>Ir a la noticia</a></div>
						</>
					)
				})
        	}
		</div>
	)
}
