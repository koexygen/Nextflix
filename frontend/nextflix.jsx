import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./store/store";
import { loginUser, logoutUser, getMovies } from "./actions/session_action";
import { getWatchlists } from "./util/fetch_util";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  const root = document.getElementById("root");
  if (window.currentUser) {
    const preLoadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id, key: window.api },
    };
    store = configureStore(preLoadedState);
    delete window.currentUser;
    delete window.api;
  } else {
    store = configureStore();
  }
  window.dispatch = store.dispatch;
  window.state = store.getState;
  window.login = loginUser;
  window.logout = logoutUser;
  window.getMovies = getMovies;
  window.getWatchlists = getWatchlists;

  ReactDOM.render(<Root store={store} />, root);
});
