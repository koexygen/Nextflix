import React from "react";

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
      <h1>ur not logged in</h1>
    );
  }
}
