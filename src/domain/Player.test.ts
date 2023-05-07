import Player from './Player';

describe('Player', () => {
  test('deve criar um jogador com um marcador definido', async () => {
    //Give (dado que)
    const name = 'Leonardo';
    const piece = 'X';
    const player01 = new Player(name, piece);
    //When (Enquanto)
    const namePlayer = player01.getName();
    const piecePlayer = player01.getPiece();
    console.log(namePlayer, piecePlayer);
    //Then (Então)
    expect(namePlayer).toBe('Leonardo');
    expect(piecePlayer).toBe('X');
  });
});

//npx jest src/domain/Player.test.ts
