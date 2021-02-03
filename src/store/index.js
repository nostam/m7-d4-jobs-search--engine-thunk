import { createStore } from "redux";
import rootReducer from "../reducer";

export const initialState = {
  bookmarks: [],
  jobs: [],
  selectedJob: {},
};

// function configureStore() {
//   return createStore(
//     rootReducer,
//     window.__REDUX__DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
// }
export default createStore(rootReducer);
