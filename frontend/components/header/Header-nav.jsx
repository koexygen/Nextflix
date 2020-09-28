import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/session_action";
import SignInButton from "../buttons/SignInButton";
import HeaderProfileContainer from "./HeaderProfileContainer";
import { Link, withRouter } from "react-router-dom";

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);

    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    this.props
      .loginDemo({ username: "demo", password: "demodemo" })
      .then(() => this.props.history.push("/browse"));
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
            <button
              className="signin-button demo-login"
              onClick={this.demoLogin}
            >
              Demo Login
            </button>
          </Link>
        )}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({ signedIn: Boolean(state.session.id) });
const mapDispatchToProps = (dispatch) => ({
  loginDemo: (demo) => dispatch(loginUser(demo)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderNav)
);
