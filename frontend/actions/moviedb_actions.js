import * as MDB_Utils from "../util/moviedb_utils";
import { receiveSessionError } from "./session_action";

export const RECEIVE_POPULAR_MOVIES = "RECEIVE_POPULAR_MOVIES";

export const receivePopular = (movies) => ({
  type: RECEIVE_POPULAR_MOVIES,
  movies,
});

export const getPopularMovies = (key) => (dispatch) => {
  return MDB_Utils.fetchPopular(key).then(
    (movies) => {
      return dispatch(receivePopular(movies.results));
    },
    (error) => dispatch(receiveSessionError(error.responseJSON))
  );
};
