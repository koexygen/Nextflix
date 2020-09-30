import React from "react";
import HeaderNavContainer from "../header/Header-navContainer";
import BrowseBillboardContainer from "./BrowseBillboardContainer";
import SliderContainer from "../sliders/SliderContainer";

export default class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.props.getMovies();
  }

  componentDidMount() {
    this.props.getPopular(this.props.apikey);
    // debugger;
  }

  render() {
    // debugger;
    return (
      <div className="browse-page">
        <HeaderNavContainer />
        <BrowseBillboardContainer />
        <div className="sliders-container">
          {this.props.movies.popularMovies ? (
            <SliderContainer
              movies={this.props.movies.popularMovies}
              tmdb={true}
            />
          ) : null}
          {this.props.movies.popularMovies ? (
            <SliderContainer
              movies={this.props.movies.popularMovies}
              tmdb={true}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
