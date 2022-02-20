import React, { useState } from "react";
import Board from "../Board/board";
import initializePieces from "../../helpers/initializePieces";
import "./game.css";

function Game() {
  const [pieces, setPieces] = useState(initializePieces());
  const [status, setStatus] = useState();
  const [player, setPlayer] = useState(0);
  const [selectedPiece, setSelectedPiece] = useState(null);
  //const [capturedWhite, setCapturedWhite] = useState([]);
  //const [capturedBlack, setCapturedBlack] = useState([]);

  function handleClick(rIndex, cIndex) {
    if (selectedPiece === null) {
      if (player === pieces[rIndex][cIndex].player) {
        setSelectedPiece([rIndex, cIndex]);
        setStatus("Piece Selected");
      } else {
        setStatus("Wrong Player");
      }
    } else {
      pieces[rIndex][cIndex] = pieces[selectedPiece[0]][selectedPiece[1]];
      pieces[selectedPiece[0]][selectedPiece[1]] = null;
      setPieces(pieces);
      setSelectedPiece(null);
      setPlayer(player ^ 1);
      setStatus("Piece Moved");
    }
  }

  return (
    <div className="gameContainer">
      <div className="gameInfo">
        <h2 className="statusMsg">{status}</h2>
      </div>
      <div className="Board">
        <Board
          onClick={(rIndex, cIndex) => handleClick(rIndex, cIndex)}
          pieces={pieces}
        />
      </div>
    </div>
  );
}

export default Game;
