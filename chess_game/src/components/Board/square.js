import React from "react";
import classNames from "classnames";
import "./board.css";

const Square = (props) => {
  var squareClass = classNames({
    square: true,
    lightSquare: props.isLight,
    darkSquare: !props.isLight,
  });

  return <button className={squareClass}></button>;
};

export default Square;
