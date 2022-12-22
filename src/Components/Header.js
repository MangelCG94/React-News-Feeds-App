import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
	<>
		<Navbar className='header' bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>
					React Noticias RSS
				</Navbar.Brand>
				<Navbar.Toggle />
				<Nav className="me-auto inicio">
					<Link to="/">Inicio</Link>
				</Nav>
			</Container>
		</Navbar>
	</>
	)
}
