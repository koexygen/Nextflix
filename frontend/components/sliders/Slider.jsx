import React from "react";
import SlideContainer from "./SlideContainer";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  componentDidMount() {}

  goToSlide(index) {
    this.setState({ activeIndex: index });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let currIdx = this.state.activeIndex;
    currIdx = (currIdx + 1) % this.props.movies.length;
    this.setState({ activeIndex: currIdx });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let currIdx = this.state.activeIndex;
    currIdx = Math.abs((currIdx - 1) % this.props.movies.length);
    this.setState({ activeIndex: currIdx });
  }

  render() {
    if (this.props.movies[this.state.activeIndex]) {
      return (
        <div className="slider-container">
          <SlideContainer
            movies={this.props.movies[this.state.activeIndex]}
            tmdb={this.props.tmdb}
            prevSlide={this.goToPrevSlide}
            nextSlide={this.goToNextSlide}
            title={this.props.title}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}
