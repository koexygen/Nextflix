import React from "react";
import HeaderNavContainer from "../../header/Header-navContainer";
export default class Watchlist extends React.Component {
  constructor(props) {
    super(props);

    this.props.getWatchlist();
  }

  handlePlay(url) {}

  render() {
    if (this.props.watchlist) {
      return (
        <div className="watchlist-page">
          <HeaderNavContainer />
          <h1>My List</h1>
          <div className="watchlist-container">
            {this.props.watchlist.map((movie, idx) => {
              return (
                <div className="watchlist-movie" key={idx}>
                  <img src={movie.image_url} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
