import Piece from "./Piece";

class King extends Piece {
  constructor(owner) {
    super(owner);
    this._icon =
      owner === 0
        ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg";
  }

  get icon() {
    return this._icon;
  }
}

export default King;
