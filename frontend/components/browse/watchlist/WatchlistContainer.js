import { connect } from "react-redux";
import Watchlist from "./Watchlist";
import { getWatchlist } from "../../../actions/session_action";

const mapStateToProps = (state) => {
  return {
    watchlist: state.entities.watchlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWatchlist: () => dispatch(getWatchlist()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
