import React from "react";
import { Link } from "react-router-dom";

export default class ContinueButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to={this.props.goTo ? this.props.goTo : "#"}>
        <button className="continue-button">{this.props.text}</button>
      </Link>
    );
  }
}
