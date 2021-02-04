// import { initialState } from "../";
import { TOGGLE_BOOKMARK } from "./constants";
const bookmarksReducer = (state = { bookmarks: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_BOOKMARK:
      console.log(
        "existed?",
        state.bookmarks.some((entry) => entry.id === payload.id)
      );
      return [
        state.bookmarks.length === 0 ||
        !state.bookmarks.some((entry) => entry.id === payload.id)
          ? [...state.bookmarks, payload]
          : state.bookmarks.filter((job) => job.id !== payload.id),
      ];
    case "TOGGLE_APPLY":
      return {
        ...state,
        applied:
          state.bookmarks.applied.length === 0 ||
          !state.bookmarks.applied.some((entry) => entry.id === payload.id)
            ? [...state.bookmarks.applied, payload]
            : state.bookmarks.applied.filter((job) => job.id !== payload.id),
      };

    default:
      return state;
  }
};

export default bookmarksReducer;
