import { RECEIVE_MOVIES } from "../actions/session_action";
import { RECEIVE_POPULAR_MOVIES } from "../actions/moviedb_actions";

const splitMovies = (movies) => {
  const result = [];
  let temp = [];

  movies.forEach((movie, idx) => {
    if (idx % 7 === 0 && idx > 0) {
      result.push(temp);
      temp = [];
    }
    temp.push(movie);
  });
  if (temp.length > 0) result.push(temp);
  return result;
};

const moviesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POPULAR_MOVIES:
      return Object.assign({}, state, {
        popularMovies: splitMovies(action.movies),
      });
    case RECEIVE_MOVIES:
      return Object.assign({}, state, { dbmovies: splitMovies(action.movies) });
    default:
      return state;
  }
};

export default moviesReducer;
