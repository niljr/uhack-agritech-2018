import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import 'semantic-ui-css/semantic.min.css';
import AddFarmer from './components/AddFarmer';
import AddCrops from './components/AddCrops';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddCrops />
      </div>
    );
  }
}

export default App;
