import React, { Component } from 'react';
import './App.css';
import ProjectGrid from './components/ProjectGrid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appHeader">
          <h1>Project Documentation</h1>
        </div>
        <ProjectGrid />
      </div>
    );
  }
}

export default App;
