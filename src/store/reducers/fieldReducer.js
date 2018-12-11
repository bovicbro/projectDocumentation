import { LOAD_FIELDS } from "../actions/actionTypes"

const initialState = []

export default function fieldReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FIELDS:
      return action.payload.fields
    default:
      return state
  }
}
