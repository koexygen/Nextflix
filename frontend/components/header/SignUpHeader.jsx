import React from "react";
import { Link } from "react-router-dom";

const SignUpHeader = (props) => (
  <nav className="signup-nav">
    <Link to="/">
      <img src={window.netflixLogoUrl} alt="netflix-logo" />
    </Link>

    <Link to="/login">
      <span>Sign In</span>
    </Link>
  </nav>
);

export default SignUpHeader;
