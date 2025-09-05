import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/auth';


function Homebar() {
    const { user, logout } = useAuth() || { user: null, logout: () => {} };

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
                        {user ? (
                            <NavDropdown title={user.username} id="account-nav-dropdown" align={{ md: 'end' }}>
                                <NavDropdown.Item as={Link} to="#">Account</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Homebar;