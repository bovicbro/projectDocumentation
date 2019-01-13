import { UPDATE_PROJECT } from "./actionTypes";

export const updateProject = project => {
  return {
    type: UPDATE_PROJECT,
    payload: { project: this.project }
  };
};
