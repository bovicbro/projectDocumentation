import { LOAD_PROJECTS } from "../actions/actionTypes"

const initialState = []

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECTS:
      return action.payload.projects
    default:
      return state
  }
}
