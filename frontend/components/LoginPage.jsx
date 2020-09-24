import React from "react";
import HeaderNav from "./header/Header-navContainer";
import LoginFormContainer from "./forms/LoginFormContainer";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderNav />
        <LoginFormContainer />
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
