import React from "react";
import classNames from "classnames";
import "./pieces.css";
import lightIcon from "../../chess_icons/Chess_klt45.svg.png";
import darkIcon from "../../chess_icons/Chess_kdt45.svg.png";

const King = (props) => {
  var kingClass = classNames({
    piece: true,
    lightPiece: props.player === 0,
    darkPiece: props.player === 1,
  });
  var icon = props.player === 0 ? lightIcon : darkIcon;

  return <img className={kingClass} src={icon} alt="king icon" />;
};

export default King;
