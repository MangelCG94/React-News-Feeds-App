import React from 'react'
import MyImage from '../Images/404.gif'

export default function NotFound() { //i can't share the image so text will have to do
	return (
		<div className='notfound' data-testid='tested'>
			<img src={MyImage} alt='notfound' />
    	</div>
	)
}