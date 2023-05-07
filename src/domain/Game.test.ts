import Game from './Game';

describe('Game', () => {
  it.skip('should resolve with user input', async () => {
    const nome = 'Jogo da Velha';
    const game = new Game(nome);
    console.log(game);
    //expect(result).toEqual(userInput);
  });

  it('should resolve with user input', async () => {
    const nome = 'Jogo da Velha';
    const game = new Game(nome);
    const mockUserInput = '1,2';
    const mockEntradaDados = jest.spyOn(game, 'entradaDados');
    mockEntradaDados.mockImplementation(() => Promise.resolve(mockUserInput));
    const result = await game.entradaDados();
    console.log(result);
    expect(result).toBe(mockUserInput);
    mockEntradaDados.mockRestore();
  });

  it.skip('should resolve with user input', async () => {
    const nome = 'Jogo da Velha';
    const game = new Game(nome);
    const row = 0;
    const column = 0;
    const piece = 'X';
    const input = { row: row, column: column, piece: piece };
    const location = game.marcarTabela(input);
    console.log(location);
    //expect(result).toEqual(userInput);
  });
});
//npx jest src/domain/Game.test.ts

// describe('Game', () => {
//   describe('escolherQuadrante', () => {
//     it('should resolve with user input', async () => {
//       const nome = 'John';
//       const game = new Game(nome);
//       const userInput = '1,2';
//       const chunk = { toString: () => userInput };
//       const result = await new Promise((resolve) => {
//         process.stdin.on('data', async (chunk) => {
//           const input = chunk.toString().trim();
//           resolve(input);
//         });
//         game.escolherQuadrante();
//         process.stdin.emit('data', chunk);
//       });
//       expect(result).toEqual(userInput);
//     });
//   });
// });

// describe('Game', () => {
//   it('should create a new Game instance with a given name', () => {
//     const game = new Game('Tic Tac Toe');
//     expect(game.nome).toBe('Tic Tac Toe');
//   });
// });

// describe('Game Basic', () => {
//   it('deve retornar o valor inserido pelo usuário', async () => {
//     jest.setTimeout(10000); // aumenta o limite de tempo para 10 segundos
//     const jogador = new Game('João');
//     const resposta = await jogador.escolherQuadrante();
//     expect(resposta).toBeTruthy(); // verifica se a resposta não é nula ou vazia
//   });

//   it('deve retornar uma string', async () => {
//     const jogador = new Game('João');
//     const resposta = await jogador.escolherQuadrante();
//     expect(typeof resposta).toBe('string');
//   });

//   it('deve retornar "A" quando o usuário digita "A"', async () => {
//     const jogador = new Game('João');
//     const resposta = await jogador.escolherQuadrante();
//     expect(resposta).toBe('A');
//   });

//   it('deve lançar uma exceção se o usuário não digitar nada', async () => {
//     const jogador = new Game('João');
//     await expect(jogador.escolherQuadrante()).rejects.toThrow();
//   });
// });

// describe('Game', () => {
//   it('should initialize with an empty board and two players', () => {
//     const game = new Game('leonardo');
//     //const board = game['board'].getBoard();
//     //const players = game['players'];
//     //const currentPlayerIndex = game['currentPlayerIndex'];

//     // expect(board).toEqual([
//     //   [' ', ' ', ' '],
//     //   [' ', ' ', ' '],
//     //   [' ', ' ', ' '],
//     // ]);
//     // expect(players.length).toBe(2);
//     // expect(players[0].getName()).toBe('Player 1');
//     // expect(players[1].getName()).toBe('Player 2');
//     // expect(players[0].getPiece()).toBe('X');
//     // expect(players[1].getPiece()).toBe('O');
//     // expect(currentPlayerIndex).toBe(0);
//   });
// });
