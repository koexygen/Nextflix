import { combineReducers } from "redux";
import usersReducer from "./users_reducers";
import moviesReducer from "./movies_reducers";

const entitiesReducer = combineReducers({
  users: usersReducer,
  movies: moviesReducer,
});

export default entitiesReducer;
