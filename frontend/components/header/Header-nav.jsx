import React from "react";
import SignInButton from "../buttons/SignInButton";
import { Link } from "react-router-dom";

export default class HeaderNav extends React.Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.logout();
  }
  // debugger;
  render() {
    return (
      <nav className="navbar-header">
        <Link to="/">
          <img
            src={window.netflixLogoUrl}
            alt="nextflix-logo"
            className="nextflix-logo"
          />
        </Link>

        {this.props.currentUser ? (
          <button onClick={this.signOut}>Sign out</button>
        ) : (
          <Link to="/login">
            <SignInButton />
          </Link>
        )}
      </nav>
    );
  }
}
