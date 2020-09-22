import React from "react";

const Greetings = (props) => {
  // debugger;
  return props.currentUser ? (
    <div>
      <h1>Welcome {props.currentUser.username}</h1>
    </div>
  ) : (
    <h1>ur not logged in</h1>
  );
};

export default Greetings;
