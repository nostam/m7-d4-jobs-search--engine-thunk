import { initialState } from "../";
import { TOGGLE_BOOKMARK } from "./constants";
const bookmarksReducer = (state = initialState.bookmarks, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_BOOKMARK:
      console.log(
        "existed?",
        state.some((entry) => entry.id === payload.id)
      );
      return {
        ...state,
        bookmarks:
          state.length === 0 || !state.some((entry) => entry.id === payload.id)
            ? state.concat(payload)
            : state.filter((job) => job.id !== payload.id),
      };
    case "TOGGLE_APPLY":
      return {
        ...state,
        applied:
          state.applied.length === 0 ||
          !state.applied.some((entry) => entry.id === payload.id)
            ? [...state.applied, payload]
            : state.applied.filter((job) => job.id !== payload.id),
      };

    default:
      return state;
  }
};

export default bookmarksReducer;
