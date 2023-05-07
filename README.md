# Jogo da Velha

Para criar objetos do jogo do tabuleiro em um modelo orientado a objetos, podemos considerar a seguinte abordagem:

Criar uma **classe Board** (Tabuleiro) que representa o tabuleiro do jogo e contém informações como a dimensão do tabuleiro, as peças jogadas, e os métodos necessários para interagir com o tabuleiro (por exemplo, verificar se uma jogada é válida, colocar uma peça em uma determinada posição, verificar o resultado do jogo, etc).

Criar uma **classe Piece** (Peça) que representa as peças jogadas no tabuleiro, e contém informações sobre o tipo da peça (por exemplo, X ou O), e possivelmente outras informações relevantes, como cor, imagem, etc.

Criar uma **classe Player** (Jogador) que representa os jogadores do jogo, e contém informações como o nome do jogador, a peça que ele joga, e os métodos necessários para que o jogador possa interagir com o jogo (por exemplo, fazer uma jogada, verificar o estado atual do jogo, etc).

Criar uma **classe Game** (Jogo) que coordena todo o jogo e contém informações como o estado atual do jogo (por exemplo, o tabuleiro, a vez do jogador, etc), e os métodos necessários para controlar o fluxo do jogo (por exemplo, fazer jogadas, verificar o resultado do jogo, etc).

Com essas classes, podemos criar objetos do jogo do tabuleiro de acordo com as necessidades do jogo em questão, instanciando as classes adequadas e configurando-as de acordo com as regras do jogo específico. Por exemplo, para criar um jogo da velha, poderíamos criar um objeto da classe Game, que contém um objeto da classe Board (representando o tabuleiro), dois objetos da classe Player (representando os jogadores), e as regras específicas para o jogo da velha (por exemplo, como ganhar o jogo, etc).

**classe Board**
createBoard
getBoard
setPiece
getResult
isValidMove

**classe Player**
getName
getPiece
getResult
**classe Game**
makeMove
printBoard
printResult
isValidMove
isGameOver
playGame
promptUser
getCurrentPlayer

**classe Piece**
type Piece
