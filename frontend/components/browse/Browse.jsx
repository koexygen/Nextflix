import React from "react";
import HeaderNavContainer from "../header/Header-navContainer";
import BrowseBillboardContainer from "./BrowseBillboardContainer";
import Slider from "../sliders/Slider";

export default class Browse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="browse-page">
        <HeaderNavContainer />
        <BrowseBillboardContainer />
        <Slider />
      </div>
    );
  }
}
