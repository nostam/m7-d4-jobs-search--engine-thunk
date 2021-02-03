import { createStore } from "redux";
import rootReducer from "../reducers";

export const initialState = {
  bookmarks: [],
  jobs: [],
  selectedJob: {},
  applied: [],
};

export default createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// TODO cannot export as a function?
// export default function configureStore() {
//   return createStore(
//     rootReducer,
//     initialState,
//     window.__REDUX__DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
// }
