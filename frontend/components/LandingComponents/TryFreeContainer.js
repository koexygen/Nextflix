import { connect } from "react-redux";
import TryFree from "./TryFree";
import { saveInputEmail } from "../../actions/session_action";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    keepEmail: (email) => dispatch(saveInputEmail(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TryFree);
