import React, { useState } from "react";
import Board from "../Board/board";
import initializePieces from "../../helpers/initializePieces";

function Game(props) {
  const [pieces, setPieces] = useState(initializePieces());
  /*
  const [pieceSelected, setPieceSelected] = useState(false);
  const [capturedWhite, setCapturedWhite] = useState([]);
  const [capturedBlack, setCapturedBlack] = useState([]);
  const [player, setPlayer] = useState(0);
  */

  return <Board pieces={pieces} />;
}

export default Game;
