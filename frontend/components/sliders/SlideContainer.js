import { connect } from "react-redux";
import Slide from "./Slide";
import { createLike } from "../../actions/session_action";

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[1],
    watchlist: state.watchlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLike: (like) => dispatch(createLike(like)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slide);
