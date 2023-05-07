import GameInputCli from './GameInputCli';

describe('Player', () => {
  test('deve entrar com os dados', async () => {
    jest.setTimeout(10000); // aumenta o limite de tempo para 10 segundos

    // Mock do console.log()
    const mockLog = jest.fn();
    console.log = mockLog;

    //Give (dado que)
    const game = new GameInputCli();

    //When (Enquanto)
    await game.prompt();

    //Then (Então)
    expect(mockLog).toHaveBeenCalledWith('Você escolheu X');
  });
});

//npx jest src/domain/GameInputCli.test.ts
