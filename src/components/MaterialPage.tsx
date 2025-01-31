import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Homebar from './Homebar';
import Gallery from './Gallery';
import Title from './Title';
import Map from  './MatMap';
import Description from './Description';
import Specs from './Specs';
import Module1 from './Module1';
import Strength from './Module2';
import Sidenav from './Sidenav';

function MaterialPage() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("http://localhost:3030/server/api/v1/materials")
            .then((res) => res.json())
            .then((data) => {console.log(data)});
    }, []);

    return (
        <div>
            <p>{!data ? "Loading..." : data}</p>
            <Row>
                <Col>
                    <Sidenav />
                </Col>
                <Col md={8}>
                    <Container className="p-0">
                        <Row>
                            <Title name="White Oak Wood"/>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Gallery />
                            </Col>
                            <Col md={4}>
                                <Row>
                                    <Description />
                                </Row>
                                <Row className="pt-2">
                                    <Col className="ps-0 pe-1">
                                    <Module1 />
                                    </Col>
                                    <Col className="ps-1 pe-0">
                                    <Strength />
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Specs />
                            </Col>
                        </Row>
                        </Container>
                    </Col>
                    <Col>

                    </Col>
                    </Row>
        </div>
    )
} 

export default MaterialPage;