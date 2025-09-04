import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals'; TODO
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Homebar from './components/Homebar';
import MaterialPage from './components/MaterialPage';
import MaterialsAdmin from './components/MaterialsAdmin';
import Login from './components/Login';
import { AuthProvider } from './utils/auth';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Route path="/login" exact={true} component={Login} />
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
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); TODO
