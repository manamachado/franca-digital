# Instruções condicionais

A primeira instrução condicional que vamos analisar é construção  `if...else`. Há algumas formas de usarmos essa construção.

Podemos usar a instrução `if` se quisermos executar um bloco de código somente se a condição for `true`, exemplo:

```js
let numero = 10

if (numero === 10) {
  console.log('O número é igual a 10')
}

// No console é retornado "O número é igual a 10" pois a condição "numero === 10" é verdadeira
```

Podemos usar a instrução `if...else` se quisermos executar um bloco de código e a condição for `true`, ou, outro bloco de código se a condição for `false`, exemplo:

```js
let numero = 100

if (numero === 10) {
  console.log('O número é igual a 10')
} else {
  console.log(`O número não é 10, o valor do número é ${numero}`)
}

// No console é retornado "O número não é 10, o valor do número é 100" pois a condição "numero === 10" é falsa, dessa forma, o programa entra no bloco "else".
```

Além do mais, se tivermos várias condições, podemos usar a instrução `if...else if...else` para executar blocos de códigos diferentes, exemplo:

```js
const mes = 5

if (mes === 1) {
  console.log('Janeiro')
} else if (mes === 2) {
  console.log('Fevereiro')
} else if (mes === 3) {
  console.log('Março')
} else {
  console.log('O mês não é Janeiro, Fevereiro ou Março')
}

// No console é retornado "O mês não é Janeiro, Fevereiro ou Março" pois a variável "mes" teve o seu valor atribuido em "5" não atendendo nenhuma das condições, dessa forma, o programa entra no bloco "else".
```
