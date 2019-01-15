import { LOAD_PROJECTS, UPDATE_PROJECT } from "../actions/actionTypes";

const initialState = [];

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECTS:
      return action.payload.projects;

    case UPDATE_PROJECT:
      return state.map(project => {
        if (project._id !== action.payload.project._id) {
          return project;
        } else {
          return action.payload.project;
        }
      });

    default:
      return state;
  }
}
