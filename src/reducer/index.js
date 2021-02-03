export default function rootReducer(
  state = { bookmarks: [], selectedJob: {} },
  action
) {
  switch (action.type) {
    case "ADD_TO_BOOKMARK":
      console.log(state.bookmarks);
      return Object.assign({}, state, {
        bookmarks: state.bookmarks.some((entry) => {
          if (entry.id !== action.payload.id) {
            return [...state.bookmarks, action.payload];
          }

          // return Object.assign({}, entry, {
          //   ...state,
          //   bookmarks: state.bookmarks.filter(
          //     (job) => job.id !== action.payload.id
          //   ),
          // });
        }),
      });
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
