import React from "react";
import SignUpHeader from "./header/SignUpHeader";
import ContinueButton from "./buttons/ContinueButton";

export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signup-page">
        <SignUpHeader />
        <div className="signup-container">
          <div className="signup-content">
            <img src={window.devicesImgUrl} alt="a" />
            <span>
              STEP <strong>1</strong> OF <strong>2</strong>
            </span>

            <h1>Finish setting up your account.</h1>

            <p>
              Netflix is personalized for you. Create a password to watch
              Netflix on any device at any time.
            </p>

            <ContinueButton goTo="/signup/form" />
          </div>
        </div>
      </div>
    );
  }
}
