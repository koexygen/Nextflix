import React from "react";
import SignUpHeader from "../header/SignUpHeader";

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: this.props.savedEmail, username: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.register(this.state).then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="signup-page">
        <SignUpHeader />

        <div className="signup-container">
          <div className="signup-content">
            <form onSubmit={this.handleSubmit}>
              <span>
                STEP <strong>2</strong> OF <strong>2</strong>
              </span>
              <h1>Create a password to start your membership.</h1>

              <p>
                Just a few more steps and you're done! We hate paperwork, too.
              </p>

              <div className="signup-form-email">
                <input
                  onChange={this.handleChange("email")}
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={this.state.email}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="signup-form-username">
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  onChange={this.handleChange("username")}
                  value={this.state.username}
                />
                <label htmlFor="username">Username</label>
              </div>

              <div className="signup-form-password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  onChange={this.handleChange("password")}
                  value={this.state.password}
                />
                <label htmlFor="password">Password</label>
                {this.props.errors.session ? (
                  <ul className="signup-errors">
                    {this.props.errors.session.map((error) => (
                      <li>{error}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <button className="continue-button">REGISTER</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
