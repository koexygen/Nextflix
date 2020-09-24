import { connect } from "react-redux";
import { withRouter } from "react-router";
import ProtectedRoute from "./ProtectedRoute";

const mapStateToProps = (state, ownProps) => {
  return {
    signedIn: Boolean(state.session.id),
  };
};

export default withRouter(connect(mapStateToProps, null)(ProtectedRoute));
