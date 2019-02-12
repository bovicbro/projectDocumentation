import { LOAD_PROJECTS, LOAD_FIELDS } from './actionTypes'

export const fetchProjects = () => {
  return dispatch => {
    fetch('http://victors.space:3001/projects')
      .then(res => res.json())
      .then(projects =>
        dispatch({ type: LOAD_PROJECTS, payload: { projects } })
      )
  }
}

export const fetchFields = () => {
  return dispatch => {
    fetch('http://victors.space:3001/fields')
      .then(res => res.json())
      .then(fields => dispatch({ type: LOAD_FIELDS, payload: { fields } }))
  }
}
