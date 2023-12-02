import React, { Component } from 'react';
import { Badge, Stack } from 'react-bootstrap';


class Title extends Component {
    render() {
        return (                
            <Stack gap={2} direction="horizontal"><h2>Oak Wood</h2><Badge bg="primary">Wood</Badge><Badge bg="secondary">Tag1</Badge><Badge bg="secondary">Tag2</Badge></Stack>
        )
    }
}

export default Title;