import { connect } from "react-redux";
import Slide from "./Slide";
import {
  createLike,
  getWatchlist,
  removeWatchlist,
} from "../../actions/session_action";

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[1],
    watchlist: state.entities.watchlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLike: (like) => dispatch(createLike(like)),
    removeWatchlist: (movieId) => dispatch(removeWatchlist(movieId)),
    getWatchlist: () => dispatch(getWatchlist()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slide);
