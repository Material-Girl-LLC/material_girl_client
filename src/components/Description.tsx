import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class Description extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Description</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Description;