import Piece from "./Piece";

class Rook extends Piece {
  constructor(owner) {
    super(owner);
    this._icon =
      owner === 0
        ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg";
  }

  get icon() {
    return this._icon;
  }
}

export default Rook;
