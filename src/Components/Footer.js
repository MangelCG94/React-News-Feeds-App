import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
//import MyImage from '../Images/github-mark.png'

export default function Footer() {
	//<Navbar.Brand><a href='https://github.com/MangelCG94'><img className='footer-image' src={MyImage} alt='icono github'/></a></Navbar.Brand>
	return (
		<>
			<div class="clear"></div>
			<Navbar className='footer fixed-bottom' bg="dark" variant="dark">
				<Container>
					
					<Navbar.Text>
						Por Miguel Ángel Candón Godoy
					</Navbar.Text>
				</Container>
			</Navbar>
		</>
	)
}
