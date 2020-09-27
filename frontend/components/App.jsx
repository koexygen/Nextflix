import React from "react";
import { Route, Switch } from "react-router";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import SignUpPageContainer from "./SignUpPageContainer";
import SignUpFormContainer from "./forms/SignUpFormContainer";
import BrowseContainer from "./browse/BrowseContainer";
import ProtectedRouteContainer from "./ProtectedRouteContainer";

const App = () => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />;
      <Route exact path="/signup/form" component={SignUpFormContainer} />;
      <Route exact path="/signup" component={SignUpPageContainer} />;
      <ProtectedRouteContainer
        exact
        path="/browse"
        component={BrowseContainer}
      />
      ;
      <Route path="*" component={LandingPage} />;
    </Switch>
  );
};

export default App;
