import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Homebar from './components/Homebar';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homebar />
        <Greeting />
        <Gallery /> 
      </div>
    )
  }
}

export default App;
