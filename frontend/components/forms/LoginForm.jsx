import React from "react";
import SignInButton from "../buttons/SignInButton";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // debugger;
    this.props.loginUser(user);
  }

  render() {
    return (
      <div className="form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          {this.props.currentUser ? (
            <h1>Hello {this.props.currentUser.username}</h1>
          ) : null}
          <h1>Sign In</h1>
          <div className="input-username">
            <input
              type="text"
              name="username"
              id="username"
              required
              onChange={this.handleChange("username")}
            />
            <label htmlFor="username">Email or phone number</label>
            <span className="form-error">
              Please enter a valid email or phone number.
            </span>
          </div>
          <div className="input-password">
            <input
              type="password"
              name="a"
              id="password"
              required
              onChange={this.handleChange("password")}
            />
            <label htmlFor="password">Password</label>
            <span className="form-error">Please Enter Valid Password.</span>
          </div>
          <SignInButton />
        </form>
      </div>
    );
  }
}
