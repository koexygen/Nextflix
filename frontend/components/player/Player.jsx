import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMovie } from "../../actions/session_action";

const Player = (props) => {
  if (props.youtubeUrl) {
    return <iframe width="420" height="345" src={props.youtubeUrl}></iframe>;
  } else {
    return (
      <div>
        <video
          autoPlay={true}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          width="480"
          height="270"
        >
          <source src={props.video} type="video/mp4" />
        </video>
      </div>
    );
  }
};

const mSTP = (state, ownProps) => {
  debugger;
  return {};
};

const mDTP = (dispatch) => {
  return {};
};

export default withRouter(connect(mSTP, mDTP)(Player));
