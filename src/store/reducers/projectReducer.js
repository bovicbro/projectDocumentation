import { LOAD_PROJECTS, UPDATE_PROJECT } from "../actions/actionTypes";

const initialState = [];

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECTS:
      return action.payload.projects;

    case UPDATE_PROJECT:
      const oldProjectindex = state.projects.findIndex(project => project._id);
      return { ...state };

    default:
      return state;
  }
}
