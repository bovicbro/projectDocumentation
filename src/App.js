import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectGrid from './components/ProjectGrid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectGrid />
      </div>
    );
  }
}

export default App;
