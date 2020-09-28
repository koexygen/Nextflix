import React from "react";
import Slide from "./Slide";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

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
    return (
      <div className="slider-container">
        <Slide
          movies={this.props.movies}
          prevSlide={this.goToPrevSlide}
          nextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}
