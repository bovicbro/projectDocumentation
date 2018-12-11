import { LOAD_PROJECTS, LOAD_FIELDS } from "./actionTypes"

export const fetchProjects = () => dispatch => {
  return fetch("data/projects.json")
    .then(res => res.json())
    .then(projects => dispatch({ type: LOAD_PROJECTS, payload: { projects } }))
}

export const fetchFields = () => dispatch => {
  return fetch("data/fields.json")
    .then(res => res.json())
    .then(fields => dispatch({ type: LOAD_FIELDS, payload: { fields } }))
}
