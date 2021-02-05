export const mainReducer = (state = {}, action)  => {
  switch (action.type) {
    case "SET_RESULTS":
      return {
        ...state,
        searchresult: {
          jobs: action.payload,
        },
      };

    case "ADD_JOB_TO_FAVOURITE":
      return {
        ...state,
        favJobs: state.favJobs.concat(action.payload),
      };

    case "REMOVE_JOB_FROM_FAVOURITE":
      return {
        ...state,
        favJobs: [
          ...state.favJobs.filter((jobId) => jobId !== action.payload),
        ],
      };

    default:
      return state;
  }
}
