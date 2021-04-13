import React from "react";
import CallIcon from "@material-ui/icons/Call";
function Head() {
  return (
    <div className="head">
      <div className="container">
        <h1>Better Healthcare for a Better Life</h1>
        <p>
          Book online or <CallIcon className="icon"/> call 16676
        </p>
      </div>
    </div>
  );
}

export default Head;
