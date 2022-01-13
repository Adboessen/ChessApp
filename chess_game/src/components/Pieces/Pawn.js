import React from "react";
import classNames from "classnames";
import "./pieces.css";
import lightIcon from "../../chess_icons/Chess_plt45.svg.png";
import darkIcon from "../../chess_icons/Chess_pdt45.svg.png";

const Pawn = (props) => {
  var pawnClass = classNames({
    piece: true,
    lightPiece: props.player === 0,
    darkPiece: props.player === 1,
  });
  var icon = props.player === 0 ? lightIcon : darkIcon;

  return <img className={pawnClass} src={icon} alt="pawn icon" />;
};

export default Pawn;
