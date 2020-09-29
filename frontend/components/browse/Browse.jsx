import React from "react";
import HeaderNavContainer from "../header/Header-navContainer";
import BrowseBillboardContainer from "./BrowseBillboardContainer";
import SliderContainer from "../sliders/SliderContainer";

export default class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.props.getMovies();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="browse-page">
        <HeaderNavContainer />
        <BrowseBillboardContainer />
        <div className="sliders-container">
          <SliderContainer movies={this.props.movies} />
          <SliderContainer movies={this.props.movies} />
          <SliderContainer movies={this.props.movies} />
        </div>
      </div>
    );
  }
}
