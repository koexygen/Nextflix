import React from "react";
import { Route, Redirect } from "react-router";

const ProtectedRoute = ({ component: Component, signedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (signedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" from={props.location.pathname} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
