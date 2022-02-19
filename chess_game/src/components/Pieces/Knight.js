import Piece from "./Piece";

class Knight extends Piece {
  constructor(owner) {
    super(owner);
    this._icon =
      owner === 0
        ? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg";
  }

  get icon() {
    return this._icon;
  }

  isMovePossible(src, dest) {
    return (
      (src[1] === dest[1] + 2 || src[1] === dest[1] - 2) &&
      (dest[0] + 1 === src[0] || dest[0] - 1 === src[0])
    );
  }
}

export default Knight;
