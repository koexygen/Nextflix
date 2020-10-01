import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMovie } from "../../actions/session_action";

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    if (this.props.youtubeUrl) {
      return (
        <iframe width="420" height="345" src={this.props.youtubeUrl}></iframe>
      );
    }
    if (this.props.movie) {
      return (
        <div className="watch-container">
          <video
            autoPlay={true}
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            width="480"
            height="270"
          >
            <source
              src={this.props.movie ? this.props.movie.video_url : null}
              type="video/mp4"
            />
          </video>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mSTP = (state, ownProps) => {
  let movie = state.entities.movies[ownProps.match.params.id];
  return {
    movie: movie,
  };
};

const mDTP = (dispatch) => {
  return {
    getMovie: (id) => dispatch(getMovie(id)),
  };
};

export default withRouter(connect(mSTP, mDTP)(Player));
