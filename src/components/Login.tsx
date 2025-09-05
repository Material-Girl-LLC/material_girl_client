import React from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Login() {
    const history = useHistory();
    const location = useLocation<{ from?: string }>();
    const { login } = useAuth();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3030/server/api/v1/login", {
                username,
                password
            }, {
                headers: {
                    'content-type': 'application/json'
                }
            });

            if (response && response.status === 200) {
                const { token, user } = response.data || {};
                login(user, token);
                const redirectTo = (location.state && (location.state as any).from) || '/';
                history.push(redirectTo);
            }
        } catch (e) {
            console.error(e);
            alert('Login failed');
        }
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <Row className="w-100 justify-content-center">
                <Col xs={12} sm={8} md={6} lg={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-4 text-center">Sign in</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="loginUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter username"
                                        value={username}
                                        onChange={(e) => setUsername(e.currentTarget.value)}
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="loginPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.currentTarget.value)}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">Login</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;