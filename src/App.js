import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { IosSwitchComponent } from './ios-switch-Component';

class App extends Component {
  render() {
    return (
      <div>
        <IosSwitchComponent />
        <IosSwitchComponent />
        <IosSwitchComponent />
      </div>
    );
  }
}

export default App;
