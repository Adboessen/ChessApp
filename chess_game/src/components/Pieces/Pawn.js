import Piece from "./Piece";
class Pawn extends Piece {
  constructor(owner) {
    super(owner);
    this._icon =
      owner === 0
        ? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg"
        : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg";
  }

  get icon() {
    return this._icon;
  }

  isMovePossible(src, dest) {
    return dest[1] <= src[1] + 2 && dest[1] > src[1] && dest[0] === src[0];
  }
}

export default Pawn;
