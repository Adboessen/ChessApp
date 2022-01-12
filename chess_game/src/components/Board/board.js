import React, { useState } from "react";
import classNames from "classnames";
import "./board.css";
import Pawn from "../Pieces/Pawn";
import King from "../Pieces/King";
import Knight from "../Pieces/Knight";
import Queen from "../Pieces/Queen";
import Bishop from "../Pieces/Bishop";
import Rook from "../Pieces/Rook";
import Square from "./square";

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
  } else {
    return null;
  }
};

const Board = (props) => {
  const board = Array(8)
    .fill(null)
    .map((row) => new Array(8).fill(null));

  board.map((row, rIndex) =>
    row.map(
      (column, cIndex) =>
        (board[rIndex][cIndex] = (
          <Square isLight={(rIndex + cIndex) % 2 === 0} />
        ))
    )
  );

  return (
    <div className="boardContainer">
      <div className="boardFlexBox">{board}</div>
    </div>
  );
};

export default Board;
