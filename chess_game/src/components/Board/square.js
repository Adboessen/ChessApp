import React from "react";
import classNames from "classnames";
import "./board.css";

function Square(props) {
  var squareClass = classNames({
    square: true,
    lightSquare: props.isLight,
    darkSquare: !props.isLight,
  });

  if (props.piece === null) {
    return (
      <div onClick={props.onClick} className="squareContainer">
        <button className={squareClass}></button>
      </div>
    );
  } else {
    return (
      <div onClick={props.onClick} className="squareContainer">
        <button className={squareClass}></button>
        <img className="piece" src={props.piece.icon} alt="icon" />
      </div>
    );
  }
}

export default Square;
