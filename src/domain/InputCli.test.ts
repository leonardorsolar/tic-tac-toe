import InputCli from './InputCli';

describe('InputCli', () => {
  describe('GameInputCli', () => {
    // test('should log user input', () => {
    //   const inputCli = new InputCli();
    //   const input = 'X';
    //   const chunk = { toString: () => input };
    //   process.stdin.emit('data', chunk);
    //   expect(console.log).toHaveBeenCalledWith(`Você escolheu ${input}`);
    // });

    test('should log user input', () => {
      const inputCli = new InputCli();
      // função para monitorar o console.log()
      //a função jest.spyOn() para criar um "espião" que monitora o comportamento da função console.log().
      const spyLog = jest.spyOn(console, 'log');
      const input = 'X';

      //cria-se o objeto para o emit
      const chunk = { toString: () => input };
      // simula a entrada do usuário
      process.stdin.emit('data', chunk);

      expect(spyLog).toHaveBeenCalledWith(`Você escolheu ${input}`);
    });
  });
});
