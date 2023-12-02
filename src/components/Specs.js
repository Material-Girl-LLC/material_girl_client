import React, { Component } from 'react';
import { Card, Table } from 'react-bootstrap';


class Specs extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Specs</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    <Table>
                        <thead>
                            <tr>
                                <th>Spec</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tensile Strength</td>
                                <td>10 strong men</td>
                            </tr>
                            <tr>
                                <td>Density</td>
                                <td>3 sponges</td>
                            </tr>
                            <tr>
                                <td>Cost per gram</td>
                                <td>5.00 pesos</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}

export default Specs;