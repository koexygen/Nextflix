import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  LOGOUT_USER,
} from "../actions/session_action";

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { id: action.user.id });
    case LOGOUT_USER:
      return { id: null };
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default sessionReducer;
