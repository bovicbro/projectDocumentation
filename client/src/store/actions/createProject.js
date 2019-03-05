import { CREATE_PROJECT } from './actionTypes'

export const createProject = label => {
  return {
    type: CREATE_PROJECT,
    payload: label,
  }
}
