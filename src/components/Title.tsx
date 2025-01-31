import React, { Component } from 'react';
import { Badge, Stack } from 'react-bootstrap';

type Props = {
    name: String
}

class Title extends Component<Props> {
    render() {
        return (
            <Stack gap={2} direction="horizontal">
                <h2>{this.props.name}</h2>
                <Badge bg="primary">Wood</Badge>
                <Badge bg="secondary">Tag1</Badge>
                <Badge bg="secondary">Tag2</Badge>
            </Stack>
        )
    }
}

export default Title;