import { createStore } from "redux";
import rootReducer from "../reducer";

export const initialState = {
  bookmarks: [],
  jobs: [],
  selectedJob: {},
};

function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX__DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
export default createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//TODO cannot export as a function?
// export default configureStore;
