import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { loginUser } from "../../actions/session_action";

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
