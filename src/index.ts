enum Player {
  X = 'X',
  O = 'O',
}

type BoardState = (Player | null)[][];

class TicTacToe {
  private board: BoardState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  private currentPlayer: Player = Player.X;

  public play(x: number, y: number): void {
    if (this.board[x][y] !== null) {
      throw new Error('Este quadrado já foi escolhido');
    }
    this.board[x][y] = this.currentPlayer;
    if (this.hasWinner()) {
      console.log(`Parabéns, ${this.currentPlayer} venceu!`);
      this.printBoard();
      process.exit();
    } else if (this.isTie()) {
      console.log('Empate!');
      this.printBoard();
      process.exit();
    }
    this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
  }

  private hasWinner(): boolean {
    const lines = [
      // horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonal
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (
        this.board[Math.floor(a / 3)][a % 3] !== null &&
        this.board[Math.floor(a / 3)][a % 3] ===
          this.board[Math.floor(b / 3)][b % 3] &&
        this.board[Math.floor(a / 3)][a % 3] ===
          this.board[Math.floor(c / 3)][c % 3]
      ) {
        return true;
      }
    }
    return false;
  }

  private isTie(): boolean {
    return this.board.every((row) => row.every((square) => square !== null));
  }

  public printBoard(): void {
    console.log('  0 1 2');
    console.log('  ------');
    for (let i = 0; i < this.board.length; i++) {
      console.log(
        `${i}|${this.board[i].map((square) => square || ' ').join('|')}|`,
      );
    }
    console.log('  ------');
  }

  public start(): void {
    this.printBoard();
    console.log('Jogo da Velha iniciado!');
    console.log(`É a vez do jogador ${this.currentPlayer}`);

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.on('line', (input: string) => {
      const [x, y] = input.split(',').map((num) => parseInt(num.trim(), 10));
      try {
        this.play(x, y);
        this.printBoard();
        console.log(`É a vez do jogador ${this.currentPlayer}`);
      } catch (error: any) {
        console.log(error.message);
      }
    });
  }
}

const game = new TicTacToe();
game.start();

//ts-node src/index.ts
