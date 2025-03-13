import React, { Component } from 'react';
import './App.css';
import MaterialPage from './components/MaterialPage';
import MaterialsAdmin from './components/MaterialsAdmin';
import MaterialEdit from './components/MaterialEdit';
import Login from './components/Login';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MaterialPage /> */}
        <Login />
      </div>
    )
  }
}

export default App;
