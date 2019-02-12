import { REMOVE_PROJECT } from './actionTypes'

export const removeProject = project => {
  return {
    type: REMOVE_PROJECT,
    payload: { project },
  }
}
