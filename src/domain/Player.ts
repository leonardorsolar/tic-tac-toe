export default class Player {
  public readonly name: string;
  public readonly piece: string;

  constructor(name: string, piece: string) {
    this.name = name;
    this.piece = piece;
  }

  getName() {
    return this.name;
  }

  getPiece() {
    return this.piece;
  }
}
