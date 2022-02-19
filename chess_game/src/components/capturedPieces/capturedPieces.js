import React, { useState } from "react";
import "./capturedPieces.css";
import intialize from "../../helpers/initializeCapturedPieces";

const CapturedPieces = (props) => {
  const [capPieces, setCapPieces] = useState(intialize());

  return (
    <div className="capturedPiecesContainer">
      <h1>Captured Pieces</h1>
      <div className="playersFlexBox">
        <div classname="piecesFlexBox">{capPieces}</div>
      </div>
    </div>
  );
};

export default CapturedPieces;
