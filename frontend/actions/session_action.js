import * as AuthUtil from "../util/auth_util";
import * as FetchUtil from "../util/fetch_util";
import * as Watchlist from "../util/watchlist_utils";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_INPUT_EMAIL = "RECEIVE_EMAIL";
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_WATCHLIST = "RECEIVE_WATCHLIST";
export const CREATE_LIKE = "CREATE_LIKE";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const receiveEmailFromInput = (email) => ({
  type: RECEIVE_INPUT_EMAIL,
  email,
});

export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies,
});

export const receiveMovie = (movie) => ({
  type: RECEIVE_MOVIE,
  movie,
});

export const receiveWatchlist = (movies) => ({
  type: RECEIVE_WATCHLIST,
  movies,
});

export const getWatchlist = () => (dispatch) => {
  return FetchUtil.getWatchlists().then(
    (movies) => {
      return dispatch(receiveWatchlist(movies));
    },
    (errors) => dispatch(receiveSessionError(errors.responseJSON))
  );
};

export const sendLike = (like) => ({
  type: CREATE_LIKE,
  like,
});

export const createLike = (like) => (dispatch) => {
  return Watchlist.createLike(like).then(
    (like) => {
      return dispatch(sendLike(like));
    },
    (errors) => dispatch(receiveSessionError(errors.responseJSON))
  );
};

export const getMovies = () => (dispatch) => {
  return FetchUtil.getMovies().then(
    (movies) => {
      return dispatch(receiveMovies(movies));
    },
    (errors) => dispatch(receiveSessionError(errors.responseJSON))
  );
};

export const getMovie = (id) => (dispatch) => {
  return FetchUtil.getMovie(id).then(
    (movie) => {
      return dispatch(receiveMovie(movie));
    },
    (errors) => dispatch(receiveSessionError(errors.responseJSON))
  );
};

export const saveInputEmail = (email) => (dispatch) => {
  return dispatch(receiveEmailFromInput(email));
};

export const logoutCurrentUser = () => ({ type: LOGOUT_USER });
export const removeCurrentMovie = () => ({ type: "REMOVE_WATCHLIST" });

export const receiveSessionError = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

export const loginUser = (user) => (dispatch) => {
  return AuthUtil.login(user).then(
    (respUser) => {
      return dispatch(receiveCurrentUser(respUser));
    },
    (error) => dispatch(receiveSessionError(error.responseJSON))
  );
};

export const signupUser = (user) => (dispatch) => {
  return AuthUtil.signup(user).then(
    (respUser) => {
      return dispatch(receiveCurrentUser(respUser));
    },
    (error) => dispatch(receiveSessionError(error.responseJSON))
  );
};

export const logoutUser = () => (dispatch) => {
  return AuthUtil.logout().then(
    () => {
      return dispatch(logoutCurrentUser());
    },
    (error) => dispatch(receiveSessionError(error.responseJSON))
  );
};

export const removeWatchlist = (moveId) => (dispatch) => {
  return Watchlist.removeWatchlist(moveId);
};
