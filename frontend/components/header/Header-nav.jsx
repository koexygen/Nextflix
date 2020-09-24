import React from "react";
import { connect } from "react-redux";
import SignInButton from "../buttons/SignInButton";
import HeaderProfileContainer from "./HeaderProfileContainer";
import { Link } from "react-router-dom";

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }

  // debugger;
  render() {
    return (
      <nav className="navbar-header">
        <Link to={this.props.signedIn ? "/browse" : "/"}>
          <img
            src={window.netflixLogoUrl}
            alt="nextflix-logo"
            className="nextflix-logo"
          />
        </Link>

        {this.props.currentUser ? (
          <HeaderProfileContainer />
        ) : (
          <Link to="/login">
            <SignInButton />
          </Link>
        )}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({ signedIn: Boolean(state.session.id) });

export default connect(mapStateToProps)(HeaderNav);
