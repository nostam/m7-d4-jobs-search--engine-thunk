// import { initialState } from "../";
import { SET_JOBS, SELECTED_JOB } from "./constants";

const jobsReducer = (state = { jobs: [], selected: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_JOBS:
      return [...payload];
    case SELECTED_JOB:
      return {
        selected: payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
