import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

import test_map from '../testing/test_map.json' // only for testing

type Material = {
    _id?: string
    priority_name?: string
    name?: string
    children?: Material[]
}

type Props = {

    parents: Material[]     

}

const MatMap = (props: Props) => {

    const NodeItem = ({ node, indexPrefix = '' }: { node: Material, indexPrefix?: string }) => {
        const label = node.priority_name || node.name || '';
        const key = (node._id || `${label}-${indexPrefix}`);
        const children = node.children || [];
        const [expanded, setExpanded] = useState(false);

        return (
            <ListGroup.Item key={key}>
                <div className="d-flex align-items-center justify-content-between">
                    <a href="#" className='text-justify' onClick={(e) => { e.preventDefault(); }}>{label}</a>
                    {children.length > 0 && (
                        <Button
                            variant="light"
                            size="sm"
                            onClick={() => setExpanded(!expanded)}
                            aria-expanded={expanded}
                            aria-controls={`matmap-children-${key}`}
                        >
                            {expanded ? '−' : '+'}
                        </Button>
                    )}
                </div>
                {children.length > 0 && (
                    <Collapse in={expanded}>
                        <div id={`matmap-children-${key}`} className="mt-2">
                            <ListGroup>
                                {children.map((child, idx) => (
                                    <NodeItem key={(child._id || `${(child.priority_name || child.name || 'item')}-${indexPrefix}${idx}`)} node={child} indexPrefix={`${indexPrefix}${idx}-`} />
                                ))}
                            </ListGroup>
                        </div>
                    </Collapse>
                )}
            </ListGroup.Item>
        );
    };

    return (
        <div>
            <ListGroup>
                {props.parents?.map((child, idx) => (
                    <NodeItem key={(child._id || `${(child.priority_name || child.name || 'item')}-${idx}`)} node={child} indexPrefix={`${idx}-`} />
                ))}
            </ListGroup>
        </div>
    )
}


export default MatMap;