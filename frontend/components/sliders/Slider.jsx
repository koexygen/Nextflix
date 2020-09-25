import React from "react";

export default class Slider extends React.Component {
  render() {
    return (
      <div className="slider-container">
        <ul className="container">
          <li className="slider-item">1</li>
          <li className="slider-item">2</li>
          <li className="slider-item">
            3<div className="slider-sub-item">Sub Item</div>
          </li>
          <li className="slider-item">4</li>
          <li className="slider-item">5</li>
          <li className="slider-item">6</li>
        </ul>
      </div>
    );
  }
}
