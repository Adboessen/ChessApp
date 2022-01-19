import React from "react";
import classNames from "classnames";
import "./pieces.css";
import lightIcon from "../../chess_icons/Chess_qlt45.svg.png";
import darkIcon from "../../chess_icons/Chess_qdt45.svg.png";

const Queen = (props) => {
  var queenClass = classNames({
    piece: true,
    lightPiece: props.player === 0,
    darkPiece: props.player === 1,
  });
  var icon = props.player === 0 ? lightIcon : darkIcon;

  return <img className={queenClass} src={icon} alt="queen icon" />;
};

export default Queen;
