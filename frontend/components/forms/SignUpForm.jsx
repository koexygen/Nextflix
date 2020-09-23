import React from "react";
import SignUpHeader from "../header/SignUpHeader";
import ContinueButton from "../buttons/ContinueButton";
import { Link } from "react-router-dom";

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signup-page">
        <SignUpHeader />

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
