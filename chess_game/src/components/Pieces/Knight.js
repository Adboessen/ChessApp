import React from "react";
import classNames from "classnames";
import "./pieces.css";
import lightIcon from "../../chess_icons/Chess_nlt45.svg.png";
import darkIcon from "../../chess_icons/Chess_ndt45.svg.png";

const Knight = (props) => {
  var knightClass = classNames({
    piece: true,
    lightPiece: props.player === 0,
    darkPiece: props.player === 1,
  });
  var icon = props.player === 0 ? lightIcon : darkIcon;

  return <img className={knightClass} src={icon} alt="knight icon" />;
};

export default Knight;
