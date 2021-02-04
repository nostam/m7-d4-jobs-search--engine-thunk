import { initialState } from "../";
import { SET_JOBS, SELECTED_JOB } from "./constants";

const jobsReducer = (state = initialState.jobs, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_JOBS:
      return { state: payload };
    case SELECTED_JOB:
      return {
        state: payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
