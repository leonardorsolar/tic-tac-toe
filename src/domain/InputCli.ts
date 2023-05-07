export default class InputCli {
  constructor() {
    // Adiciona o listener para o evento de dados no fluxo de entrada padrão
    process.stdin.on('data', async (chunk) => {
      const input = chunk.toString().trim();
      console.log(`Você escolheu ${input}`);

      // Faz alguma ação com base na entrada do usuário, por exemplo:
      // if (input === 'X') {
      //   // Faça algo se a entrada for X
      // } else if (input === 'O') {
      //   // Faça algo se a entrada for O
      // } else {
      //   // Faça algo se a entrada não for válida
      // }

      // Aguarda uma nova entrada de dados
      await this.prompt();
    });
  }

  public prompt(): Promise<void> {
    console.log(`Entre com um X ou um O:`);
    return Promise.resolve();
  }
}
