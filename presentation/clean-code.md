# Clean Code

> Quando o código é exatamente o que parece ser

## Resumão:

- Nomes bem descritivos, sem poupar caracteres que revelem a intenção da classe/função/módulo
- Evite coisas hardcoded
- Código conciso (DRY, SRP)

1. Nomes significativos
   - Seja **descritivo**, não economize caracteres
   - Verbos ao nomear funções, substantivo para variáveis
2. Funcoes pequenas

```js
var executarTurno = function (linha, coluna) {
  if (tabuleiro[linha][coluna] !== VAZIO) {
    alterarMensagemDeStatus("Jogada Inválida!");
    return;
  }
  tabuleiro[linha][coluna] = jogadorAtual;
  numeroDeJogadas++;
  document.querySelector("#tabuleiro").innerHTML = "";
  document.querySelector("#status").innerHTML = "";
  for (var linha = 0; linha < TAMANHO_MAXIMO_LINHA; linha++) {
    for (var coluna = 0; coluna < TAMANHO_MAXIMO_COLUNA; coluna++) {
      var button = document.createElement("button");
      button.textContent = tabuleiro[linha][coluna].simbolo;
      button.classList.add("botaoTabuleiro");
      button.onclick = function () {
        executarTurno(linha, coluna);
      };
      document.querySelector("#tabuleiro").appendChild(button);
    }
    var br = document.createElement("br");
    document.querySelector("#tabuleiro").appendChild(br);
  }
  if (verificarLinhas() || verificarColunas() || verificarDiagonais()) {
    document.querySelector("#status").innerHTML =
      "Jogador " + jogadorAtual.simbolo + " venceu!";
  } else if (numeroDeJogadas === 8) {
    document.querySelector("#status").innerHTML = "Empate!";
  }
  if (jogadorAtual === jogadorX) {
    jogadorAtual = jogadorO;
  } else {
    jogadorAtual = jogadorX;
  }
};
```

Compare com:

```js
var executarTurno = function (linha, coluna) {
  if (tabuleiro[linha][coluna] !== VAZIO) {
    alterarMensagemDeStatus("Jogada Inválida!");
    return;
  }
  efetuarJogadaNaPosicao(linha, coluna);
  desenharTabuleiro();
  verificaVencedor();
  alternarJogador();
};
```

3. SRP (Classes, funções)
4. Comentários
   - Comente contexto, não funcionamento de código
   - "Todo comentário é uma falha ao se expressar no código" (Tio Bob)
   - Nunca referencia código de outros módulos, quanto mais distante maior as chances de estar dessincronizado e passar informação errada
5. Tratamento de erros
6. [Testes](testes.md)
7. Design de classes
8. Refatoração constante e sem medo
   - [Regra do Bom Escoteiro](http://blog.triadworks.com.br/a-regra-do-bom-escoteiro)
