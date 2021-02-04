import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import jobsReducer from "./jobs/reducer";
import bookmarksReducer from "./bookmarks/reducer";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  jobs: jobsReducer,
  bookmarks: bookmarksReducer,
});
export const initialState = {
  bookmarks: [],
  jobs: [],
  selectedJob: {},
  applied: [],
};

export default createStore(
  rootReducer,
  composedEnhancer(applyMiddleware(thunk))
);
