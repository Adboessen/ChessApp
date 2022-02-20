import React from "react";
import "./capturedPieces.css";

const CapturedPieces = (props) => {
  //maps captured pieces to list of img components
  let whiteCapturedPieces = props.whitePieces.map((piece, index) => (
    <img className="capturedPiece" src={piece.icon} alt="icon" key={index} />
  ));

  let blackCapturedPieces = props.blackPieces.map((piece, index) => (
    <img className="capturedPiece" src={piece.icon} alt="icon" key={index} />
  ));

  return (
    <div className="capturedPiecesContainer">
      <h2 className="capturedTitle">Captured Pieces</h2>
      <div className="playersFlexBox">
        <div className="piecesFlexBox">{whiteCapturedPieces}</div>
        <div className="piecesFlexBox">{blackCapturedPieces}</div>
      </div>
    </div>
  );
};

export default CapturedPieces;
