import Piece from "./Piece";

class Queen extends Piece {
  constructor(owner) {
    super(owner);
    this._icon =
      owner === 0
        ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg";
  }

  get icon() {
    return this._icon;
  }
}

export default Queen;
