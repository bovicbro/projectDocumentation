import { LOAD_FIELDS, UPDATE_FIELD } from "../actions/actionTypes"

const initialState = []

export default function fieldReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FIELDS:
      return action.payload.fields

    case UPDATE_FIELD:
      return state.map(field => {
        return field._id === action.payload.field._id
          ? action.payload.field
          : field
      })

    default:
      return state
  }
}
