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
    this.props.loginUser(user).then(() => this.props.history.push("/browse"));
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
            <label htmlFor="username">Enter Username</label>
            <span className="form-error">{this.props.errors.session[0]}</span>
          </div>
          <div className="input-password">
            <input
              type="password"
              name="a"
              id="password"
              required
              onChange={this.handleChange("password")}
            />
            <label htmlFor="password">Enter Password</label>
            <span className="form-error">{this.props.errors.session[0]}</span>
          </div>
          <SignInButton />
        </form>
      </div>
    );
  }
}
