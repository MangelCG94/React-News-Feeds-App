import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import MyImage from '../Images/github-mark.png'

export default function Footer() {
  return (
	<Navbar className='footer fixed-bottom' bg="dark" variant="dark">
		<Container>
			<Navbar.Brand><img className='footer-image' src={MyImage} alt='icono github'/></Navbar.Brand>
			<Navbar.Text>
				Por Miguel Ángel Candón Godoy
			</Navbar.Text>
		</Container>
	</Navbar>
	
  )
}
