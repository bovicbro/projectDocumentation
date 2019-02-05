import { NEW_PROJECT } from "./actionTypes";

export const newProject = label => {
  return {
    type: NEW_PROJECT,
    payload: {
      label
    }
  };
};
