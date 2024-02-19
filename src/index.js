import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Homebar from './components/Homebar';
import MaterialPage from './components/MaterialPage';
import MaterialsAdmin from './components/MaterialsAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Row>
        <Homebar />
      </Row>
      <Row>
        <Switch>
          <Route path="/" exact={true} component={MaterialPage} /> 
          <Route path="/materials" exact={true} component={MaterialsAdmin} />
        </Switch>
      </Row>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
