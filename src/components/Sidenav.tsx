import React, { Component } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Nav} from "react-bootstrap";
import MatMap from './MatMap';
import test_map from '../testing/test_map.json'

class Sidenav extends Component {
    render() {
        const show = true;

        return (
            <div placement='start' responsive="lg">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Material Map</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/*
                        For every item in the list, 
                            render its name as a collapsible
                            IF that item has children,
                                For every item in its children,
                                    render child's name as collapsible
                                    IF that child has children...
                    */}
                    <MatMap parents = {test_map}/>


                </Offcanvas.Body>
            </div>
        )
    }
}

export default Sidenav;