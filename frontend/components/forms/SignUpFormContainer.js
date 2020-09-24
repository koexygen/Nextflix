import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signupUser } from "../../actions/session_action";

const mapStateToProps = (state, ownProps) => {
  let savedEmail;
  state.session.inputEmail
    ? (savedEmail = state.session.inputEmail)
    : (savedEmail = "");
  return {
    savedEmail: savedEmail,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (user) => dispatch(signupUser(user)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
);
