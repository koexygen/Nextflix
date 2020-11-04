import { RECEIVE_MOVIES, RECEIVE_MOVIE } from "../actions/session_action";
import {
  RECEIVE_POPULAR_MOVIES,
  RECEIVE_MOVIE_TRAILER,
} from "../actions/moviedb_actions";

const splitMovies = (movies) => {
  const result = [];
  let temp = [];

  movies.forEach((movie, idx) => {
    if (idx % 10 === 0 && idx > 0) {
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

    case RECEIVE_MOVIE:
      return { [action.movie.info.id]: action.movie.info };
    case RECEIVE_MOVIES:
      let newState = Object.assign({}, state);
      for (let [id, movie] of Object.entries(action.movies)) {
        newState[movie.id] = movie;
      }
      return newState;
    default:
      return state;
  }
};

export default moviesReducer;
