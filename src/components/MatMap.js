import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { Component } from 'react';
import { AccordionItem } from 'react-bootstrap';

import test_map from '../testing/test_map.json' // only for testing

class MatMap extends Component {

    render() {

        const show = true;

        return (

            <ListGroup>
            {this.props.parents?.map(child => {
                return(    
                    <ListGroup.Item>
                    {child.name}
                    <MatMap parents={child.children} />
                    </ListGroup.Item>
                );
            })}
            </ListGroup>
        )
    }
}

export default MatMap;