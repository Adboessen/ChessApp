import React from "react";
import Pawn from "../components/Pieces/Pawn";

const CapturedPieces = () => {
  const capturedPieces = new Array(2).map(() => new Array(24).fill(null));

  return capturedPieces;
};

export default CapturedPieces;
