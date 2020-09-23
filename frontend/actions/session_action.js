import * as AuthUtil from "../util/auth_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const logoutCurrentUser = () => ({ type: LOGOUT_USER });

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
