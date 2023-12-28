import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { Component } from 'react';
import { AccordionItem } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

import test_map from '../testing/test_map.json' // only for testing

const MatMap = (props) => {

    const show = true;
    const [open, setOpen] = useState(true);

    return (
        <div>
            {/* <Button className='dropdown-toggle' onClick={() => setOpen(!open)}>{child.name}</Button> */}
            <Collapse in={open}>
                <ListGroup>
                {props.parents?.map(child => {
                    return(
                        <ListGroup.Item>
                        <a href="#" className='text-justify' onClick={() => setOpen(false)}>{child.name + ' >'}</a>
                        <MatMap parents={child.children} />
                        </ListGroup.Item>
                    );
                })}
                </ListGroup>
            </Collapse>
        </div>
    )
}


export default MatMap;