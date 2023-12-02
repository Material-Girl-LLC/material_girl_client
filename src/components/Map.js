import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { Component } from 'react';

class Map extends Component {

    render() {

        const show = true;

        return (
            <Offcanvas placement='start' responsive="lg">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Material Map</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder for the map
                </Offcanvas.Body>

            </Offcanvas>
        )
    }
}

export default Map;