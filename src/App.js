import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import getRoutes from './config/routes';
import './styles/common.css';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        {getRoutes()}
      </div>
    );
  }
}

export default App;
