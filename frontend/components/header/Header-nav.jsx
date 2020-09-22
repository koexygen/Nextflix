import React from "react";
import SignInButton from "../buttons/SignInButton";

export default class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }
  // debugger;
  render() {
    return (
      <nav className="navbar-header">
        <img
          src={window.nextflixLogoUrl}
          alt="nextflix-logo"
          className="nextflix-logo"
        />

        <SignInButton />
      </nav>
    );
  }
}
