import { connect } from "react-redux";
import Browse from "./Browse";
import { getMovies } from "../../actions/session_action";
import { getPopularMovies } from "../../actions/moviedb_actions";

const mapStateToProps = (state) => {
  return {
    movies: state.entities.movies,
    apikey: state.session.key,
  };
};

const mapDispatchToProps = () => (dispatch) => {
  return {
    getMovies: () => dispatch(getMovies()),
    getPopular: (key) => dispatch(getPopularMovies(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
