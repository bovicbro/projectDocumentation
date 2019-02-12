import { NEW_FIELD } from './actionTypes'

export const newField = (label, isColumn = false) => {
  return {
    type: NEW_FIELD,
    payload: {
      label,
      type: 'text',
      isColumn,
    },
  }
}
