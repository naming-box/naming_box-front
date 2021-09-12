import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../components/Header.css';

export default function Header(): JSX.Element {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Naming Box</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Projects</Nav.Link>
                        <Nav.Link href="#pricing">Words</Nav.Link>
                        <Nav.Link href="#login" className="fr">LogIn</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}