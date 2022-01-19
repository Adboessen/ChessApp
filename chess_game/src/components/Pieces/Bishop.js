import React from "react";
import classNames from "classnames";
import "./pieces.css";
import lightIcon from "../../chess_icons/Chess_blt45.svg.png";
import darkIcon from "../../chess_icons/Chess_bdt45.svg.png";

const Bishop = (props) => {
  var bishopClass = classNames({
    piece: true,
    lightPiece: props.player === 0,
    darkPiece: props.player === 1,
  });
  var icon = props.player === 0 ? lightIcon : darkIcon;

  return <img className={bishopClass} src={icon} alt="bishop icon" />;
};

export default Bishop;
