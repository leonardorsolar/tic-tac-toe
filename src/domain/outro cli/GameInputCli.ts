import * as readline from 'readline';

export default class GameInputCli {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  public prompt(): Promise<string | void> {
    console.log(`Entrou no prompt`);
    return new Promise((resolve) => {
      this.rl.question('Entre com um X ou um O: ', (answer) => {
        // o mock espiona a chamada console.log
        console.log(`Você escolheu ${answer}`);
        resolve(answer);
      });
    }).then(() => {
      this.rl.close();
    });
  }
}
