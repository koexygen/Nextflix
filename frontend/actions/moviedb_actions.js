import * as MDB_Utils from "../util/moviedb_utils";
import { receiveSessionError } from "./session_action";

export const RECEIVE_POPULAR_MOVIES = "RECEIVE_POPULAR_MOVIES";
export const RECEIVE_MOVIE_TRAILER = "RECEIVE_MOVIE_TRAILER";

export const receivePopular = (movies) => ({
  type: RECEIVE_POPULAR_MOVIES,
  movies,
});

// const mergeTrailers = (movies) => {
//   const youtubePath = "https://www.youtube.com/watch?v=";
//   movies.forEach((movie, idx) => {
//     MDB_Utils.getMovieTrailer(
//       movie.id,
//       "afc2df6ed2b105665b061dcc22c09716"
//     ).then((resp) => {
//       movies[idx]["trailer"] = youtubePath + resp.results[0].key;
//     });
//   });
//
//   return movies;
// };

export const getPopularMovies = (key) => (dispatch) => {
  return MDB_Utils.fetchPopular(key).then(
    (movies) => {
      // let newList = mergeTrailers(movies.results);
      // // debugger;
      return dispatch(receivePopular(movies.results));
    },
    (error) => dispatch(receiveSessionError(error.responseJSON))
  );
};

export const receiveMovieTrailer = (trailer) => ({
  type: RECEIVE_MOVIE_TRAILER,
  trailer,
});

export const getMovieTrailer = (movieId, key) => (dispatch) => {
  return MDB_Utils.getMovieTrailer(movieId, key).then(
    (data) => {
      return dispatch(receiveMovieTrailer(data.results[0].key));
    },
    (error) => dispatch(receiveSessionError(error.responseJSON))
  );
};
