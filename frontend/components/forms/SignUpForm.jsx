import React from "react";
import ContinueButton from "../buttons/ContinueButton";

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signup-page">
        <nav className="signup-nav">
          <img src={window.netflixLogoUrl} alt="netflix-logo" />

          <span>Sign In</span>
        </nav>

        <div className="signup-container">
          <div className="signup-content">
            <h1>hi</h1>
            <ContinueButton />
          </div>
        </div>
      </div>
    );
  }
}
