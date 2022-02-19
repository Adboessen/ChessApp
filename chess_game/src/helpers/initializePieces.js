import Pawn from "../components/Pieces/Pawn";
import King from "../components/Pieces/King";
import Knight from "../components/Pieces/Knight";
import Queen from "../components/Pieces/Queen";
import Bishop from "../components/Pieces/Bishop";
import Rook from "../components/Pieces/Rook";

function getStartingPiece(row, column) {
  if (row === 1) {
    return new Pawn(1);
  } else if (row === 6) {
    return new Pawn(0);
  } else if (row === 0) {
    if (column === 0 || column === 7) {
      return new Rook(1);
    } else if (column === 1 || column === 6) {
      return new Knight(1);
    } else if (column === 2 || column === 5) {
      return new Bishop(1);
    } else if (column === 3) {
      return new Queen(1);
    } else if (column === 4) {
      return new King(1);
    }
  } else if (row === 7) {
    if (column === 0 || column === 7) {
      return new Rook(0);
    } else if (column === 1 || column === 6) {
      return new Knight(0);
    } else if (column === 2 || column === 5) {
      return new Bishop(0);
    } else if (column === 3) {
      return new Queen(0);
    } else if (column === 4) {
      return new King(0);
    }
  } else {
    return null;
  }
}

function Pieces() {
  var pieces = Array.from(Array(8), () => new Array(8));

  for (let i = 0; i < pieces.length; i++) {
    for (let j = 0; j < pieces[0].length; j++) {
      pieces[i][j] = getStartingPiece(i, j);
    }
  }

  return pieces;
}

export default Pieces;
