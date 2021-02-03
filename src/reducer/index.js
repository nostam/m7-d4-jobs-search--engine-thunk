import { initialState } from "../store";
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_BOOKMARK":
      console.log(
        "existed?",
        state.bookmarks.some((entry) => entry.id === action.payload.id)
      );
      return {
        ...state,
        bookmarks:
          state.bookmarks.length === 0 ||
          !state.bookmarks.some((entry) => entry.id === action.payload.id)
            ? [...state.bookmarks, action.payload]
            : state.bookmarks.filter((job) => job.id !== action.payload.id),
      };
    case "ADD_TO_BOOKMARK":
      console.log(action.payload);
      return { ...state, bookmarks: [...state.bookmarks, action.payload] };
    case "REMOVE_FROM_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (job) => job.id !== action.payload.id
        ),
      };
    case "SELECTED_JOB":
      return {
        ...state,
        selectedJob: action.payload,
      };
    default:
      return state;
  }
}
