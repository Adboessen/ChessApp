import React from "react";
import "./timer.css";

function Timer(props) {
  var Minutes = Math.floor(props.timeLeft / 60);
  var Seconds = String(props.timeLeft - Minutes * 60).padStart(2, "0");
  return (
    <div className="Timer">
      <h2 className="timeLeft">
        {Minutes}:{Seconds}
      </h2>
    </div>
  );
}

export default Timer;
