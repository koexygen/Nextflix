import React from "react";
import HeaderNav from "./header/Header-navContainer";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNav />
        <div className="form-container">
          <form className="login-form">
            <h1>Sign In</h1>

            <div className="input-username">
              <input type="text" name="a" id="username" required />
              <label htmlFor="username">Email or phone number</label>
              <span className="form-error">
                Please enter a valid email or phone number.
              </span>
            </div>
          </form>
        </div>
        <div className="try-free-cover">
          <img
            src={window.coverWallPaperUrl}
            alt="nextflix-cover"
            className="cover-image"
          />
          <div className="cover-blur-hover"></div>
        </div>
      </div>
    );
  }
}
