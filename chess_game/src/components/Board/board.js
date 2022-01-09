import React from "react";
import classNames from "classnames";
import "board.css";
import Pawn from "../Pieces/Pawn";
import King from "../Pieces/King";
import Knight from "../Pieces/Knight";
import Queen from "../Pieces/Queen";
import Bishop from "../Pieces/Bishop";
import Rook from "../Pieces/Rook";

const Square = (props) => {
  var squareClass = classNames({
    lightSquare: props.isLight,
    darkSquare: !props.isLight,
  });
  let SquarePiece = props.piece;

  return (
    <div>
      <button className={squareClass} onClick={props.onClick}></button>
      <SquarePiece />
    </div>
  );
};

const Board = (props) => {
  const squares = Array(8).map(() => new Array(8).fill(null));
  const getStartingPiece = (row, column) => {
    if (row === 1) {
      return new Pawn(1);
    } else if (row === 6) {
      return Pawn(0);
    } else if (row === 0) {
      if (column === 0 || column === 7) {
        return Rook(1);
      } else if (column === 1 || column === 6) {
        return Knight(1);
      } else if (column === 2 || column === 5) {
        return Bishop(1);
      } else if (column === 3) {
        return Queen(1);
      } else if (column === 4) {
        return King(1);
      }
    } else if (row === 7) {
      if (column === 0 || column === 7) {
        return Rook(0);
      } else if (column === 1 || column === 6) {
        return Knight(0);
      } else if (column === 2 || column === 5) {
        return Bishop(0);
      } else if (column === 3) {
        return Queen(0);
      } else if (column === 4) {
        return King(0);
      }
    }
  };

  return (
    <div>
      {squares.map((row) =>
        row.map((column) => (
          <Square
            isLight={true}
            piece={getStartingPiece(row.index, column.index)}
          />
        ))
      )}
    </div>
  );
};

export default Board;
