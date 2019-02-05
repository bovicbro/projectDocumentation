import { LOAD_FIELDS, UPDATE_FIELD, NEW_FIELD } from '../actions/actionTypes'

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

    case NEW_FIELD:
      const field = {
        ...action.payload,
        _id: Math.random()
          .toString(36)
          .substring(7),
      }

      return [...state, field]

    default:
      return state
  }
}
