import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import * as authUtil from "./util/auth_util";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.createUser = authUtil.signup;
  window.loginUser = authUtil.login;
  window.logoutUser = authUtil.logout;

  ReactDOM.render(<Root />, root);
});
