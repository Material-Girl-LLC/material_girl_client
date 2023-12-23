import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Homebar from './components/Homebar';
import Gallery from './components/Gallery';
import Title from './components/Title';
import Map from './components/MatMap';
import Description from './components/Description';
import Specs from './components/Specs';
import Module1 from './components/Module1';
import Strength from './components/Module2';
import Sidenav from './components/Sidenav';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Homebar />
        </Row>
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
}

export default App;
