# Funções

Funções são blocos de construção fundamentais em JavaScript.

Uma função é um procedimento de JavaScript, é um conjunto de instruções que executa uma tarefa ou calcula um valor.

Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

Nos exemplos, usaremos como exemplo uma função chamada `soma`, e essa função vai receber dois parâmetros (`numero1` e `numero2`) e vai realizar a operação de somar esses dois valores e retornar o valor somado.


## Function declaration

O jeito mais básico de definir funções em JavaScript é através da function `declaration`.

```js
function soma(numero1, numero2) {
  return numero1 + numero2
}
```


## Function expression

As functions `expression` e `declaration` são muito parecidas, a diferença é que uma função de expressão pode ser lidada como uma qualquer expressão em JavaScript.

```js
const soma = function(numero1, numero2) {
  return numero1 + numero2
}
```

## Arrow function

Um dos motivos da criação da `arrow function` é facilitar a criação e utilização de funções em JavaScript, ou seja, elas permitem a criação de funções de maneira resumida.

Em outras palavras, as arrow functions são simplificações para as functions `expression`.

```js
const soma = (numero1, numero2) => numero1 + numero2
```