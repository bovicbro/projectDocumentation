import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import ProjectGrid from "./components/projects/ProjectGrid";

import store from "./store";
import EditModeSwitcher from "./components/settings/EditModeSwitcher";

// Add font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUndo,
  faCheck,
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";
library.add(faUndo, faCheck, faPlusSquare);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <EditModeSwitcher />
          <div className="appHeader">
            <h1>Project Documentation</h1>
          </div>
          <ProjectGrid />
        </div>
      </Provider>
    );
  }
}

export default App;
