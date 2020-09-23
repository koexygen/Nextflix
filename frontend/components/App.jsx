import React from "react";
import { Route, Switch } from "react-router";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import SignUpPageContainer from "./SignUpPageContainer";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />;
      <Route exact path="/login" component={LoginPage} />;
      <Route exact path="/signup" component={SignUpPageContainer} />;
    </Switch>
  );
};

export default App;
