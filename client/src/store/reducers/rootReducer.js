import { combineReducers } from "redux"

import projectReducer from "./projectReducer"
import fieldReducer from "./fieldReducer"
import settingsReducer from "./settingsReducer"

export default combineReducers({
  projects: projectReducer,
  fields: fieldReducer,
  settings: settingsReducer
})
