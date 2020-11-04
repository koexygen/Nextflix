import React from "react";
import HeaderNav from "./header/Header-navContainer";
import TryFreeContainer from "./LandingComponents/TryFreeContainer";
import Footer from "./footer/Footer";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-container">
        <HeaderNav />
        <TryFreeContainer />
        <Footer />
      </div>
    );
  }
}
