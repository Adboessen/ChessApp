import React from "react";
import "./board.css";
import Square from "./square";

function Board(props) {
  //mpas through pieces array to create array of Square components
  let pieceComponents = props.pieces.map((row, rIndex) => {
    return row.map((col, cIndex) => {
      return (
        <Square
          onClick={() => props.onClick(rIndex, cIndex)}
          isLight={(rIndex + cIndex) % 2 === 0}
          piece={col}
          key={rIndex * 8 + cIndex}
        />
      );
    });
  });

  return (
    <div className="boardContainer">
      <div className="boardFlexBox">{pieceComponents}</div>
    </div>
  );
}

export default Board;
