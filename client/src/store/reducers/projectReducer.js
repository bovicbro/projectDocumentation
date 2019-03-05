import {
  LOAD_PROJECTS,
  UPDATE_PROJECT,
  NEW_PROJECT,
  REMOVE_PROJECT,
} from '../actions/actionTypes'

const initialState = []

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECTS:
      return action.payload.projects

    case UPDATE_PROJECT:
      return state.map(project => {
        if (project._id !== action.payload.project._id) {
          return project
        } else {
          return action.payload.project
        }
      })

    case NEW_PROJECT:
      return [...state, action.payload]

    case REMOVE_PROJECT:
      return state.filter(project => project._id !== action.payload.project._id)

    default:
      return state
  }
}
