import React from "react";

export default class TryFree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputEmail: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleSubmit() {
    this.props.keepEmail(this.state.inputEmail);
  }

  handleChangeEmail(e) {
    this.setState({ inputEmail: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="try-free-items">
          <h1 className="landing-text">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="landing-text">Watch anywhere. Cancel anytime.</h2>

          <form className="landing-form" onSubmit={this.handleSubmit}>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>

            <input
              type="text"
              name=""
              placeholder="Email address"
              value={this.state.inputEmail}
              onChange={this.handleChangeEmail}
            />
            <button type="submit">
              Get Started <span> > </span>
            </button>
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
