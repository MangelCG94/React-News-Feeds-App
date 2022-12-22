import React, { useContext } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'
import { v4 as uuid } from "uuid"
import axios from 'axios'


const API_KEY = 'cdredtkccdao79sdvmb5narab1udkfrp0opre1be'


const RssContext = React.createContext()

export function useFeeds() {
	return useContext(RssContext)
}

export const RssProvider = ({ children }) => {
	const [feeds, setFeeds] = useLocalStorage('Feeds', [])
	const [contents, setContents] = useLocalStorage('Contents', [])

	function getFeeds() {
		return feeds
	}

	function getContentsFeed(id) {
		return contents.filter(content => content.feedId === id);
	}

	function addFeeds(link) {
		//cogemos la respuesta de axios
		axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${link}&api_key=${API_KEY}`).then(response => {
			//si el link existe, devolvemos la parte de los datos para el siguiente 'then'
			if(response.data.status) {
				return response.data
			}
		})
		.then(promise => {

			let new_id = uuid()
			//coge los contenidos anteriores y añadeles este
			setFeeds(prevFeeds => {
				return [...prevFeeds, { 
					id: new_id, 
					link: link,
					title: promise.feed.title,
				}]
			})
			
			setContents(prevContents => {
				return [...prevContents, { 
					feedId: new_id, //la foreign key para enlazar con el titulo de feed
					contents: promise.items, //items es un array de objetos
				}]
			})
		})
		.catch(response => {
			console.log(response.status, response.statusText)
		})
    }

	function deleteFeeds(id) {
		setFeeds(prevFeeds => {
			console.log(prevFeeds.filter(feed => feed.id !== id))
			return prevFeeds.filter(feed => feed.id !== id)
		})
		setContents(prevContents => {
			return prevContents.filter(content => content.id = id)
		})
	}

	return (
		<RssContext.Provider value={{
			feeds,
			setFeeds,
			contents,
			setContents,
			getContentsFeed,
			getFeeds,
			addFeeds,
			deleteFeeds,
		}}>
			{children}
		</RssContext.Provider>
		
	)
}