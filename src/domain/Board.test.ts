import Board from './Board';

describe('', () => {
  test('deve criar um tabuleiro para o jogo', async () => {
    //Give (dado que)
    const board = new Board();
    //When (Enquanto)
    const boardPlayer = board.getBoard();
    //Then (Então)
    expect(boardPlayer).toHaveLength(3);
  });

  test('deve inserir uma peça no tabuleiro', async () => {
    //Give (dado que)
    const board = new Board();
    const row = 0;
    const column = 0;
    const piece = 'X';
    //When (Enquanto)
    const location = board.setPiece(row, column, piece);
    //Then (Então)
    console.log(location);
    console.log(board);
    expect(location).toBe('X');
  });
});

//npx jest src/domain/Board.test.ts
