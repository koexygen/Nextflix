import React from "react";
import HeaderNav from "./header/Header-navContainer";
import TryFreeContainer from "./LandingComponents/TryFreeContainer";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-container">
        <HeaderNav />
        <TryFreeContainer />
      </div>
    );
  }
}
