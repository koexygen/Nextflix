import { connect } from "react-redux";
import TryFree from "./TryFree";
import { saveInputEmail } from "../../actions/session_action";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    keepEmail: (email) => dispatch(saveInputEmail(email)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TryFree)
);
