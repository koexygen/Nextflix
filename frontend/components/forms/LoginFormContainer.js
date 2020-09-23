import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { loginUser } from "../../actions/session_action";

const mapStateToProps = (state, ownProps) => {
  // debugger;
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
