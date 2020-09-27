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
    currIdx = (currIdx + 1) % moviesData.length;
    this.setState({ activeIndex: currIdx });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let currIdx = this.state.activeIndex;
    currIdx = Math.abs((currIdx - 1) % moviesData.length);
    this.setState({ activeIndex: currIdx });
  }

  render() {
    return (
      <div className="slider-container">
        <Slide
          movies={moviesData[this.state.activeIndex]}
          prevSlide={this.goToPrevSlide}
          nextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}

const moviesData = [
  [
    {
      text: "Gio",
    },
    {
      text: "Paloma",
    },
    {
      text: "AppAcademy",
    },
    {
      text: "Josh",
    },
    {
      text: "rich",
    },
    {
      text: "Someone",
    },
  ],
  [
    {
      text: "Gio2",
    },
    {
      text: "Paloma2",
    },
    {
      text: "AppAcademy2",
    },
    {
      text: "Josh2",
    },
    {
      text: "rich2",
    },
    {
      text: "Someone2",
    },
  ],
];
