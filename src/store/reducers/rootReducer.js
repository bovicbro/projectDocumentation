import { combineReducers } from "redux"

import projectReducer from "./projectReducer"
import fieldReducer from "./fieldReducer"

export default combineReducers({
  projects: projectReducer,
  fields: fieldReducer
})
