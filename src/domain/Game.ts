import * as readline from 'readline';
import Board from './Board';
import InputCli from './InputCli';
import GameInputCli from './InputCli';
import Player from './Player';

export default class Game {
  private readonly board: Board;
  private readonly players: Player[];
  constructor(public nome: string) {
    this.nome = nome;
    this.players = [new Player('Player X', 'X'), new Player('Player O', 'O')];
    this.board = new Board();
  }

  getName() {
    this.nome;
  }

  entradaDados(): Promise<any> {
    return new Promise((resolve) => {
      process.stdin.on('data', async (chunk) => {
        const resposta = chunk.toString().trim();
        const [linha, coluna] = resposta.split(',');
        //console.log(`${this.nome}, você escolheu o quadrante ${resposta}`);
        console.log(
          `${this.nome}, você escolheu o quadrante na linha ${linha} e coluna ${coluna}`,
        );
        const result = { row: linha, column: coluna, piece: 'X' };
        const input = game.marcarTabela(result);
        resolve(result);
      });
    });
  }

  // passando os dados row, columne piece
  marcarTabela(input: any) {
    console.log(input);
    const row = input.row;
    const column = input.column;
    //const piece = input.piece;
    const piece = 'X';
    const location = this.board.setPiece(row, column, piece);
    console.log(location);
    console.log(this.board);
    return location;
  }
}

const game = new Game('Jogo');
const inputData = game.entradaDados();
console.log(`Entrada do usuário: ${inputData}`);

// async entradaDados(): Promise<string> {
//   return new Promise((resolve) => {
//     process.stdin.on('data', function (chunk) {
//       const command = chunk.toString().replace(/\n/g, '');
//       resolve(command);
//     });
//   });
// }

// export default class Game {
//   constructor(public nome: string) {}

//   escolherQuadrante(): Promise<string> {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });

//     return new Promise((resolve) => {
//       rl.question(
//         `${this.nome}, você deseja escolher qual quadrante? `,
//         (resposta: string) => {
//           rl.close();
//           resolve(resposta);
//         },
//       );
//     });
//   }
// }

// Exemplo de uso:
// const jogador = new Game('João');
// jogador.escolherQuadrante().then((quadrante) => {
//   console.log(`${jogador.nome} escolheu o quadrante ${quadrante}`);
// });

//ts-node src/domain/Game.ts
//npm run build && node build/domain/Gamer.ts
