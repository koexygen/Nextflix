import React from "react";
import { Route, Switch } from "react-router";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />;
      <Route exact path="/login" component={LoginPage} />;
    </Switch>
  );
};

export default App;
