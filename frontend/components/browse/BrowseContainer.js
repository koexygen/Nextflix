import { connect } from "react-redux";
import Browse from "./Browse";
import { getMovies } from "../../actions/session_action";

const mapStateToProps = (state) => {
  return {
    movies: state.entities.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getMovies: () => dispatch(getMovies()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
