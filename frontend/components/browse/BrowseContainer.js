import { connect } from "react-redux";
import Browse from "./Browse";
import { getMovies } from "../../actions/session_action";
import {
  getPopularMovies,
  getMovieTrailer,
  getTopRated,
  getNowPlaying,
} from "../../actions/moviedb_actions";

const mapStateToProps = (state) => {
  return {
    movies: state.entities.movies,
    apikey: state.session.key,
    error: state.errors.session.status_code,
  };
};

const mapDispatchToProps = () => (dispatch) => {
  return {
    getMovies: () => dispatch(getMovies()),
    getPopular: (key) => dispatch(getPopularMovies(key)),
    getTopRated: (key) => dispatch(getTopRated(key)),
    getNowPlaying: (key) => dispatch(getNowPlaying(key)),
    getMovieTrailer: (movieId, key) => dispatch(getMovieTrailer(movieId, key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
