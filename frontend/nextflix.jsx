import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./store/store";
import { loginUser, logoutUser } from "./actions/session_action";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.dispatch = store.dispatch;
  window.state = store.getState;
  window.login = loginUser;
  window.logout = logoutUser;

  ReactDOM.render(<Root store={store} />, root);
});
