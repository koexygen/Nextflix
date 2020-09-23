import React from "react";
import SignInButton from "../buttons/SignInButton";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.setState(this.props.currentUser);
  }

  render() {
    return (
      <div className="form-container">
        <form className="login-form">
          {this.props.currentUser ? (
            <h1>Hello {this.props.currentUser.username}</h1>
          ) : null}
          <h1>Sign In</h1>

          <div className="input-username">
            <input type="text" name="a" id="username" required />
            <label htmlFor="username">Email or phone number</label>
            <span className="form-error">
              Please enter a valid email or phone number.
            </span>
          </div>
          <div className="input-password">
            <input type="password" name="a" id="password" required />
            <label htmlFor="password">Password</label>
            <span className="form-error">Please Enter Valid Password.</span>
          </div>
          <SignInButton />
        </form>
      </div>
    );
  }
}
