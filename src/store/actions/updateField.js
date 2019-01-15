import { UPDATE_FIELD } from "./actionTypes"

export const updateField = field => {
  return {
    type: UPDATE_FIELD,
    payload: { field }
  }
}

export const toggleFieldAsColumn = field => {
  return {
    type: UPDATE_FIELD,
    payload: {
      field: {
        ...field,
        isColumn: !field.isColumn
      }
    }
  }
}
