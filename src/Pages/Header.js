import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Header() {
	return (
	<>
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">
					React Noticias RSS
				</Navbar.Brand>
				<Navbar.Toggle />
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Borrar todo</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	</>
	)
}
