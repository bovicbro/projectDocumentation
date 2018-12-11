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
          <ProjectGrid />
        </div>
      </Provider>
    )
  }
}

export default App
