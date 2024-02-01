import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MaterialPage from './components/MaterialPage';
import MaterialsAdmin from './components/MaterialsAdmin';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MaterialPage /> */}
        <MaterialsAdmin />
      </div>
    )
  }
}

export default App;
