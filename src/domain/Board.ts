export default class Board {
  private board: string[][];
  constructor() {
    this.board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
  }

  getBoard() {
    return this.board;
  }

  setPiece(row: number, column: number, piece: string) {
    return (this.board[row][column] = piece);
  }

  marked() {
    this.board[0][0] = '0';
    return true;
  }
}
