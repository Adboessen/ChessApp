import React from "react";
import classNames from "classnames";
import "./pieces.css";
import lightIcon from "../../chess_icons/Chess_rlt45.svg.png";
import darkIcon from "../../chess_icons/Chess_rdt45.svg.png";

const Rook = (props) => {
  var rookClass = classNames({
    piece: true,
    lightPiece: props.player === 0,
    darkPiece: props.player === 1,
  });
  var icon = props.player === 0 ? lightIcon : darkIcon;

  return <img className={rookClass} src={icon} alt="rook icon" />;
};

export default Rook;
