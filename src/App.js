import React, { Component } from "react"
import "./App.css"
import { Provider } from "react-redux"
import ProjectGrid from "./components/ProjectGrid"

import store from "./store"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="appHeader">
            <h1>Project Documentation</h1>
          </div>
          <ProjectGrid />
        </div>
      </Provider>
    )
  }
}

export default App
