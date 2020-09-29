import { RECEIVE_MOVIES } from "../actions/session_action";

const splitMovies = (movies) => {
  const result = [];
  let temp = [];

  movies.forEach((movie, idx) => {
    if (idx % 6 === 0 && idx > 0) {
      result.push(temp);
      temp = [];
    }
    temp.push(movie);
  });
  if (temp.length > 0) result.push(temp);
  return result;
};

const moviesReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MOVIES:
      return splitMovies(action.movies);
    default:
      return state;
  }
};

export default moviesReducer;
