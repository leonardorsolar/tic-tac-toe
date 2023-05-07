process.stdin.on('data', async function (chuck) {
  //console.log(chuck);
  const command = chuck.toString().replace(/\n/g, '');
  console.log(command);
  if (command.startsWith('numero')) {
    console.log('1');
  }
});

// npx ts-node src/cli/cli.ts

// Este código é usado para ouvir eventos de entrada de dados no fluxo de entrada padrão (process.stdin) do ambiente Node.js.
// Quando há dados disponíveis para leitura no fluxo de entrada padrão, o callback fornecido será executado, e o objeto de dados lido será passado como argumento para a função (neste caso, o argumento é chamado de chunk).
// O código então simplesmente registra o objeto chunk no console, usando a função console.log(). Este código pode ser útil quando se deseja criar um programa que aguarda entrada do usuário ou de outros processos, e responde a ela de forma assíncrona. Por exemplo, um programa de linha de comando que lê a entrada do usuário e executa uma determinada ação com base na entrada recebida

//a
//chuck = array de bytes = buffer -> texto convertido em hexadecimal
//console.log(chuck);
//<Buffer 61 0a>
//console.log(chuck.toString());
