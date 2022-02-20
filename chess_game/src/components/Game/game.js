import React, { useState } from "react";
import Board from "../Board/board";
import initializePieces from "../../helpers/initializePieces";
import "./game.css";

function Game() {
  //State for board
  const [pieces, setPieces] = useState(initializePieces());
  //state for status message
  const [status, setStatus] = useState("New Game");
  //state for player turn
  const [player, setPlayer] = useState(0);
  //state for pieces selected to move
  const [selectedPiece, setSelectedPiece] = useState(null);
  //const [capturedWhite, setCapturedWhite] = useState([]);
  //const [capturedBlack, setCapturedBlack] = useState([]);

  function handleClick(rIndex, cIndex) {
    //checks if piece no piece is selected
    if (selectedPiece === null) {
      //check it the peice matches active players turn
      if (player === pieces[rIndex][cIndex].player) {
        //sets selectdd piece to clicked cords
        setSelectedPiece([rIndex, cIndex]);
        setStatus("Piece Selected");
      } else {
        setStatus("Wrong Player");
      }
    } else {
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
