import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./store/store";
import {
  loginUser,
  logoutUser,
  getMovies,
  getMovie,
} from "./actions/session_action";
import { getWatchlists } from "./util/fetch_util";
import { createLike } from "./util/watchlist_utils";
import * as MDB_Utils from "./util/moviedb_utils";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  const root = document.getElementById("root");
  if (window.currentUser) {
    const preLoadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { key: window.api, id: window.currentUser.id },
    };
    store = configureStore(preLoadedState);
    delete window.api;
    delete window.currentUser;
  } else {
    const preLoadedState = {
      session: { key: window.api },
    };
    delete window.api;
    store = configureStore(preLoadedState);
  }
  window.dispatch = store.dispatch;
  window.state = store.getState;
  window.login = loginUser;
  window.logout = logoutUser;
  window.getMovies = getMovies;
  window.getMovie = getMovie;
  window.getWatchlists = getWatchlists;
  window.createLike = createLike;
  window.getTrailer = MDB_Utils.getMovieTrailer;

  ReactDOM.render(<Root store={store} />, root);
});
