import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MaterialPage from './components/MaterialPage';
import MaterialsAdmin from './components/MaterialsAdmin';
import MaterialEdit from './components/MaterialEdit';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MaterialEdit />
      </div>
    )
  }
}

export default App;
