import React, { useState, useEffect } from "react";
import Board from "../Board/board";
import Timer from "../Timer/timer";
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
  //timer state for time left
  const [whiteTimeLeft, setWhiteTimeLeft] = useState(300);
  const [blackTimeLeft, setBlackTimeLeft] = useState(300);

  useEffect(() => {
    //checks if seconds are higher than 0 and white is active player
    if (!whiteTimeLeft || player === 1) return;
    //sets interval to update every second
    const intervalId = setInterval(() => {
      setWhiteTimeLeft(whiteTimeLeft - 1);
    }, 1000);
    //clears interval before rerender
    return () => clearInterval(intervalId);
  }, [whiteTimeLeft, player]);

  useEffect(() => {
    if (!blackTimeLeft || player === 0) return;

    const intervalId = setInterval(() => {
      setBlackTimeLeft(blackTimeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [blackTimeLeft, player]);

  function handleClick(rIndex, cIndex) {
    if (selectedPiece === null) {
      if (pieces[rIndex][cIndex].player === player) {
        setStatus(
          String.fromCharCode(cIndex + 65).toLowerCase() +
            (8 - rIndex) +
            " Selected"
        );
        setSelectedPiece([rIndex, cIndex]);
      } else {
        setStatus("Wrong Player");
      }
    } else if (pieces[rIndex][cIndex] === null) {
      pieces[rIndex][cIndex] = pieces[selectedPiece[0]][selectedPiece[1]];
      pieces[selectedPiece[0]][selectedPiece[1]] = null;
      setSelectedPiece(null);
      setPieces(pieces);
      setPlayer(player ^ 1);
      setStatus("Piece Moved");
    } else {
      if (
        pieces[rIndex][cIndex].player ===
        pieces[selectedPiece[0]][selectedPiece[1]].player
      ) {
        setSelectedPiece([rIndex, cIndex]);
        setStatus(
          String.fromCharCode(cIndex + 65).toLowerCase() +
            (8 - rIndex) +
            " Selected"
        );
      } else {
        if (pieces[rIndex][cIndex].player === 0) {
          capturedWhite.push(pieces[rIndex][cIndex]);
          setCapturedWhite(capturedWhite);
        } else if (pieces[rIndex][cIndex].player === 1) {
          capturedBlack.push(pieces[rIndex][cIndex]);
          setCapturedBlack(capturedBlack);
        }
        pieces[rIndex][cIndex] = pieces[selectedPiece[0]][selectedPiece[1]];
        pieces[selectedPiece[0]][selectedPiece[1]] = null;
        setPieces(pieces);
        setSelectedPiece(null);
        setPlayer(player ^ 1);
        setStatus("Piece Moved");
      }
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
        <div className="Timers">
          <Timer timeLeft={whiteTimeLeft} />
          <Timer timeLeft={blackTimeLeft} />
        </div>
        <CapturedPieces
          whitePieces={capturedWhite}
          blackPieces={capturedBlack}
        />
      </div>
    </div>
  );
}

export default Game;
