import React, { Component } from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Oak1 from './img/Oak1.jpg';


class Gallery extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img src={Oak1} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>This is the text for the first slide</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
    
}

export default Gallery;