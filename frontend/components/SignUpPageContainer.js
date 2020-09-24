import { connect } from "react-redux";
import SignUpPage from "./SignUpPage";

const mapStateToProps = (state, ownProps) => {
  return {
    savedEmail: state.session.inputEmail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
