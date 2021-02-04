import { SET_JOBS, SELECTED_JOB } from "./constants";

export const setJobs = (res) => ({ type: SET_JOBS, payload: res });
export const selectedJob = (job) => ({ type: SELECTED_JOB, payload: job });
