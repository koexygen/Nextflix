import { RECEIVE_WATCHLIST } from "../actions/session_action";

const watchlistReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WATCHLIST:
      return action.movies;
    default:
      return state;
  }
};

export default watchlistReducer;
