import React, { useState } from "react";
import Board from "../Board/board";
import initializePieces from "../../helpers/initializePieces";
import "./game.css";
import CapturedPieces from "../capturedPieces/capturedPieces";

function Game() {
  //State for board
  const [pieces, setPieces] = useState(initializePieces());
  //state for status message
  const [status, setStatus] = useState("New Game");
  //state for player turn
  const [player, setPlayer] = useState(0);
  //state for pieces selected to move
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [capturedWhite, setCapturedWhite] = useState([]);
  const [capturedBlack, setCapturedBlack] = useState([]);

  function handleClick(rIndex, cIndex) {
    //checks if piece no piece is selected
    if (selectedPiece === null) {
      //check it the peice matches active players turn
      if (player === pieces[rIndex][cIndex].player) {
        //sets selectdd piece to clicked cords
        setSelectedPiece([rIndex, cIndex]);
        setStatus(
          String.fromCharCode(cIndex + 65).toLowerCase() +
            Math.abs(rIndex - 8) +
            " Selected"
        );
      } else {
        setStatus("Wrong Player");
      }
    } else if (
      pieces[rIndex][cIndex] !== null &&
      pieces[rIndex][cIndex].player ===
        pieces[selectedPiece[0]][selectedPiece[1]].player
    ) {
      setSelectedPiece([rIndex, cIndex]);
      setStatus(
        String.fromCharCode(cIndex + 65).toLowerCase() +
          Math.abs(rIndex - 8) +
          " Selected"
      );
    } else {
      //add Captured piece to list
      if (
        pieces[rIndex][cIndex] !== null &&
        pieces[rIndex][cIndex].player === 0
      ) {
        capturedWhite.push(pieces[rIndex][cIndex]);
        setCapturedWhite(capturedWhite);
      } else if (
        pieces[rIndex][cIndex] !== null &&
        pieces[rIndex][cIndex].player === 1
      ) {
        capturedBlack.push(pieces[rIndex][cIndex]);
        setCapturedBlack(capturedBlack);
      }
      //swaps clicked piece with selectred piece
      pieces[rIndex][cIndex] = pieces[selectedPiece[0]][selectedPiece[1]];
      //sets clicked piece to null
      pieces[selectedPiece[0]][selectedPiece[1]] = null;
      //sets new piece array
      setPieces(pieces);
      //reset selected piece
      setSelectedPiece(null);
      //switches to next players turn (uses bitwise XOR)
      setPlayer(player ^ 1);
      setStatus("Piece Moved");
    }
  }

  return (
    <div className="gameContainer">
      <div className="Board">
        <Board
          onClick={(rIndex, cIndex) => handleClick(rIndex, cIndex)}
          pieces={pieces}
        />
      </div>
      <div className="gameInfo">
        <h2 className="statusMsg">{status}</h2>
        <CapturedPieces
          whitePieces={capturedWhite}
          blackPieces={capturedBlack}
        />
      </div>
    </div>
  );
}

export default Game;
