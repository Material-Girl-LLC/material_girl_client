import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class Module1 extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Module1</Card.Title>
                    <Card.Text>
                    Module 1 text for something to put in module 1!
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Module1;