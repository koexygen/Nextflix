import { combineReducers } from "redux";
import errorsReducer from "./errors_reducer";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducers";

const rootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
  entities: entitiesReducer,
});

export default rootReducer;
