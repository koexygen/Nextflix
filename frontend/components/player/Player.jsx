import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMovie } from "../../actions/session_action";
import { getMovieTrailer } from "../../actions/moviedb_actions";

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const youtubePath = "https://www.youtube.com/watch?v=";
    this.props.getMovie(this.props.match.params.id);
    this.props.match.params.id > 10
      ? this.props.getTrailer(this.props.match.params.id).then((data) => {
          this.setState({ trailer: youtubePath + data.results[0].key });
        })
      : null;

    console.log(this.state);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
    console.log(this.state);
  }

  onRouteChanged() {
    this.props.getMovie(this.props.match.params.id);
  }

  render() {
    if (this.state.trailer) {
      return (
        <iframe width="420" height="345" src={this.state.trailer}></iframe>
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
  // debugger;
  return {
    movie: movie,
  };
};

const mDTP = (dispatch) => {
  return {
    getMovie: (id) => dispatch(getMovie(id)),
    getTrailer: (id) =>
      dispatch(getMovieTrailer(id, "afc2df6ed2b105665b061dcc22c09716")),
  };
};

export default withRouter(connect(mSTP, mDTP)(Player));
