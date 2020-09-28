import React from "react";

export default class HeaderProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoverClass: "",
    };
    this.signOut = this.signOut.bind(this);
    this.hoverDropdownOn = this.hoverDropdownOn.bind(this);
    this.hoverDropdownOff = this.hoverDropdownOff.bind(this);
  }

  signOut() {
    this.props.logout();
  }

  hoverDropdownOn() {
    this.setState({ hoverClass: "profile-dropdown-hovered" });
  }

  hoverDropdownOff() {
    this.setState({ hoverClass: "" });
  }

  render() {
    return (
      <div
        className="header-profile-container"
        onMouseEnter={this.hoverDropdownOn}
        onMouseLeave={this.hoverDropdownOff}
      >
        <div className={"profile-picture"}>
          <img
            src={this.props.currentUser.image_url || window.profileImgUrl}
            alt="profile-picture"
          />
          <span className="dropdown-arrow"></span>
        </div>
        <div className={`profile-dropdown ${this.state.hoverClass}`}>
          <a onClick={this.signOut}>Sign Out</a>
        </div>
      </div>
    );
  }
}
