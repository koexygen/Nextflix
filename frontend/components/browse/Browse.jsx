import React from "react";
import HeaderNavContainer from "../header/Header-navContainer";
import BrowseBillboardContainer from "./BrowseBillboardContainer";
import SliderContainer from "../sliders/SliderContainer";
import Footer from "../footer/Footer";

export default class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.state = { key: this.props.apikey };
  }

  componentDidMount() {
    this.props.getPopular(this.props.apikey);
    this.props.getTopRated(this.props.apikey);
    this.props.getNowPlaying(this.props.apikey);
    this.props.error ? this.props.getPopular(this.props.apikey) : null;
    this.props.getMovies();
  }

  render() {
    // debugger;
    return (
      <div className="browse-page">
        <HeaderNavContainer />
        <BrowseBillboardContainer />
        <div className="sliders-container">
          {this.props.movies.awsMovies ? (
            <SliderContainer
              movies={this.props.movies.awsMovies}
              tmdb={false}
              title="AWS S3 Movies, demo for watchlist"
            />
          ) : null}
          {this.props.movies.popularMovies ? (
            <SliderContainer
              movies={this.props.movies.popularMovies}
              tmdb={true}
              title="Popular Movies"
            />
          ) : null}
          {this.props.movies.topRatedMovies ? (
            <SliderContainer
              movies={this.props.movies.topRatedMovies}
              tmdb={true}
              title="Top Rated Movies"
            />
          ) : null}
          {this.props.movies.nowPlaying ? (
            <SliderContainer
              movies={this.props.movies.nowPlaying}
              tmdb={true}
              title="Upcoming Movies"
            />
          ) : null}
        </div>
        <Footer />
      </div>
    );
  }
}
