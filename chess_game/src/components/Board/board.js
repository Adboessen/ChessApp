import React from "react";
import "./board.css";
import Square from "./square";
/*
<Square
  isLight={(rIndex + cIndex) % 2 === 0}
  piece={column}
  key={rIndex * 8 + cIndex}
/>;
*/
function Board(props) {
  let pieceComponents = props.pieces.map((row, rIndex) => {
    return row.map((col, cIndex) => {
      return (
        <Square
          isLight={(rIndex + cIndex) % 2 === 0}
          piece={col}
          key={rIndex * 8 + cIndex}
        />
      );
    });
  });
  console.log(props.pieces);
  return (
    <div className="boardContainer">
      <div className="boardFlexBox">{pieceComponents}</div>
    </div>
  );
}

export default Board;
