import { RECEIVE_CURRENT_USER, LOGOUT_USER } from "../actions/session_action";

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { id: action.user.id });
    case LOGOUT_USER:
      return { id: null };
    default:
      return state;
  }
};

export default sessionReducer;
