import { RECEIVE_MOVIES } from "../actions/session_action";

const moviesReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.movies;
    default:
      return state;
  }
};

export default moviesReducer;
