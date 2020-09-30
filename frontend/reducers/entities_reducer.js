import { combineReducers } from "redux";
import usersReducer from "./users_reducers";
import moviesReducer from "./movies_reducers";
import watchlistReducer from "./watchlist_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  movies: moviesReducer,
  watchlist: watchlistReducer,
});

export default entitiesReducer;
