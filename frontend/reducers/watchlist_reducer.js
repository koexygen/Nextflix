import { RECEIVE_WATCHLIST } from "../actions/session_action";

const watchlistReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WATCHLIST:
      let newState = Object.assign({}, state);
      for (let [id, movie] of Object.entries(action.movies)) {
        newState[movie.id] = movie;
      }
      return newState;
    default:
      return state;
  }
};

export default watchlistReducer;
