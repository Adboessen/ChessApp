import Piece from "./Piece";

class Bishop extends Piece {
  constructor(owner) {
    super(owner);
    this._icon =
      owner === 0
        ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg";
  }

  get icon() {
    return this._icon;
  }
}

export default Bishop;
