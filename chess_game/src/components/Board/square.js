import React from "react";
import classNames from "classnames";
import "./board.css";

const Square = (props) => {
  var squareClass = classNames({
    square: true,
    lightSquare: props.isLight,
    darkSquare: !props.isLight,
  });

  return (
    <div className="squareContainer" onClick={props.clicked}>
      <button className={squareClass}></button>
      {props.piece}
    </div>
  );
};

export default Square;
