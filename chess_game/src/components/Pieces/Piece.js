class Piece {
  constructor(owner) {
    this._player = owner;
  }

  get player() {
    return this._player;
  }
}

export default Piece;
