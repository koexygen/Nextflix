import React from "react";
import HeaderNavContainer from "../../header/Header-navContainer";
import { Link } from "react-router";
export default class Watchlist extends React.Component {
  constructor(props) {
    super(props);

    this.props.getWatchlist();
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(id) {
    this.props.history.push(`/watch/${id}`);
  }

  render() {
    if (this.props.watchlist) {
      return (
        <div className="watchlist-page">
          <HeaderNavContainer />
          <h1>My List</h1>
          <div className="watchlist-container">
            {Object.values(this.props.watchlist).map((movie, idx) => {
              return (
                <div
                  className="watchlist-movie"
                  key={idx}
                  onClick={() => this.handlePlay(movie.id)}
                >
                  <img src={movie.image_url} alt={movie.title} />{" "}
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="watchlist-page">
          <HeaderNavContainer />
        </div>
      );
    }
  }
}
