import React, { Component } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Homebar extends Component {
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/materials">Materials</Nav.Link>
                            <Nav.Link href="#Tools">Tools</Nav.Link>
                            <Nav.Link href="#Projects">Projects</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Homebar;