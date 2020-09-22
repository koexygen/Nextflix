import React from "react";
import SignInButton from "../buttons/SignInButton";

export default class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }
  // debugger;
  render() {
    return this.props.currentUser ? (
      <div>
        <h1>Welcome {this.props.currentUser.username}</h1>
      </div>
    ) : (
      <SignInButton />
    );
  }
}
