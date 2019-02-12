import { TOGGLE_EDIT_MODE } from "../actions/actionTypes"

const initialState = {
  editable: true
}

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_EDIT_MODE:
      return { editable: !state.editable }
    default:
      return state
  }
}
