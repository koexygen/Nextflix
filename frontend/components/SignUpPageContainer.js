import { connect } from "react-redux";
import SignUpPage from "./SignUpPage";
import { receiveEmailFromInput } from "../actions/session_action";

const mapStateToProps = (state, ownProps) => {
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
