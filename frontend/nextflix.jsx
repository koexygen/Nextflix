import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./store/store";
import { loginUser, logoutUser } from "./actions/session_action";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  const root = document.getElementById("root");
  if (window.currentUser) {
    const preLoadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preLoadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.dispatch = store.dispatch;
  window.state = store.getState;
  window.login = loginUser;
  window.logout = logoutUser;

  ReactDOM.render(<Root store={store} />, root);
});
