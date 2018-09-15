import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';
import 'semantic-ui-css/semantic.min.css';
import getRoutes from './config/routes';

class App extends Component {
  render() {
    return (
      <div>
        {getRoutes()}
      </div>
    );
  }
}

export default App;
