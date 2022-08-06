# Operadores

Operadores em Javascript são símbolos especiais que envolvem um ou mais operandos com a finalidade de produzir um determinado resultado.

Aprenderemos sobre operadores de atribuição, comparação, aritméticos e lógicos.

## Operadores de atribuição

O operador de atribuição é o sinal de igual `(=)`, ele atribui um valor a uma variável:

```js
let x = 5
```

Essa operação atribui a `x` o valor `5`.

E existem também os operadores de atribuição composta.

```js
let x

// O código abaixo irá verificar o valor de `x`, somá-lo a `10` e atribuí-lo novamente a `x`.
x += 10

// O código abaixo irá verificar o valor de `x`, subtrair `3` e atribuí-lo novamente a `x`.
x -= 3

// O código abaixo irá verificar o valor de `x`, multiplicar por `8` e atribuí-lo novamente a `x`.
x *= 8

// O código abaixo irá verificar o valor de `x`, dividor por `2` e atribuí-lo novamente a `x`.
x /= 2

// O código abaixo irá verificar o valor de `x`, realizar o resto da divisão por `3` e atribuí-lo novamente a `x`.
x %= 3
```

## Operadores de comparação

Os operadores de comparação envolvem dois operandos e retornam um resultado lógico (verdadeiro ou falso), geralmente usamos esses operadores quando temos que tomar alguma decisão.

```js
// Menor que
1 < 2

// Maior que
4 > 2

// Igual a
1 == "1"

// Igual a (compara o tipo, boa prática)
1 === 1

// Diferente de
2 != 1

// Diferente de (compara o tipo, boa prática)
1 !== "1"

// Menor ou igual que
10 <= 10

// Maior ou igual que
5 >= 4
```

## Operadores aritméticos

Esses operadores são velhos conhecidos se você já frequentou aulas de matemática. São usados para fazer operações de soma, subtração, multiplicação, divisão, módulo e exponenciação.

```js
// Adição
1 + 1

// Subtração
4 - 2

// Multiplicação
2 * 4

// Divisão
4 / 2

// Resto da divisão
10 % 2

// Exponenciação
2 ** 4
```

## Operadores lógicos

São usados para realizar operações lógicas. Elas podem ser do tipo AND, OR e NOT. Os operandos devem ser lógicos, verdadeiro ou falso. Também podem operar sobre expressões lógicas, ou seja, que retornem valores verdadeiro ou falso. 

```js
// operador OR (||)
// Aqui no operador OR, ele deve satisfazer apenas uma das condições, ou seja, uma das duas devem ser verdadeiras

let idade = 15
(idade < 18) || (idade > 25) // 👉 retornará true (verdadeiro)
```

```js
// operador AND (&&)
// Aqui no operador AND, ele deve satisfazer AS DUAS condições, ou seja, as duas devem ser verdadeiras

let nome = "Zezinho"
(nome === "Joãozinho") && (idade < 25) // 👉 retornará false (falso)
```

```js
// operador NOT (&&)
// Aqui no operador NOT, ele inverte o valor

!true // 👉 retornará false (falso)
!false // 👉 retornará true (verdadeiro)
```