# Tipos de Dados

## String

Toda vez que você ouvir ou ler a palavra `string`, você já pode relacionar com `textos`.


Por definição, strings são sequências de caracteres alfanuméricos (letras, números e/ou símbolos) amplamente usadas em programação. Em Javascript, uma string sempre estará entre aspas.

```js
const frase = "Isso é uma string!" // aspas duplas
```

ou

```js
const outraFrase = 'Isso também é uma string!' // aspas simples
```

ou ainda

```js
console.log('E isso é uma string no console.log') // aspas simples
```

## Number

Toda vez que você ouvir ou ler a palavra `number`, você já relaciona com `números`.

Como o próprio nome já diz, `Numbers` são um tipo de dados relacionados à números no Javascript.

```js
const numero = 10 // inteiros
const outroNumero = 10.5 // ponto flutuante 
```

## Boolean

Muitas vezes, em programação, você precisará de um tipo de dados que só pode ter um de dois valores, como:

- `SIM` ou `NÃO`
- `LIGADO` ou `DESLIGADO`
- `VERDADEIRO` ou `FALSO`

Para isso, o JavaScript possui um tipo de dados booleano. Ele só pode assumir os valores `true` ou `false`.

## Array

Um array é uma variável especial, que pode conter mais de um valor:

```js
const frutas = ["Banana", "Maçã", "Laranja"]
```

### Por que usar arrays?

Se você tiver uma lista de itens (uma lista de compras do mercado, por exemplo), armazenar os itens em variáveis ​​únicas pode ficar assim:

```js
const item1 = "Arroz"
const item2 = "Feijão"
const item3 = "Macarrão"
```

No entanto, e se você quiser percorrer os itens e encontrar um específico?

E se você não tivesse 3 itens, mas 50?

A solução é um array!

Um array pode conter muitos valores em um único nome e você pode acessar os valores referindo-se a um número de índice.

```js
const listaDeCompras = ["Arroz", "Feijão", "Macarrão"]
```

Espaços e quebras de linha não são importantes. Uma declaração pode abranger várias linhas:


```js
const listaDeCompras = [
  "Arroz", 
  "Feijão", 
  "Macarrão"
]
```

Para acessar um elemento do array de maneira individual, basta declarar a `posição` do elemento entre `colchetes`, as posições de um array iniciam à partir do `0`.

```js
const listaDeCompras = ["Arroz", "Feijão", "Macarrão"]

console.log(listaDeCompras[0]) // Arroz
console.log(listaDeCompras[1]) // Feijão
console.log(listaDeCompras[2]) // Macarrão
```

## Object

Um object (objeto) é uma coleção de dados (que geralmente consistem em diversas variáveis — que são chamadas de propriedades quando estão dentro de objetos).

Vamos trabalhar com um exemplo para entender como eles são:

```js
const pessoa = {
  nome: 'João Silva',
  idade: 32,
  sexo: 'masculino',
  interesses: ['música', 'futebol'],
}
```

Para acessar os dados do seu objeto de forma individual, basta declarar o objeto, juntamente com a propriedade em questão.

Por exemplo, para exibir os dados no console:

```js
console.log(pessoa.nome) // João Silva
console.log(pessoa.idade) // 32
console.log(pessoa.interesses) // ['música', 'futebol']
console.log(pessoa.interesses[0]) // música
```

## Undefined

`Undefined` significa que o valor nunca existiu, não foi definido em nenhum contexto, é indefinido.

Por exemplo, se declaramos uma variável, sem atribuir a ela nenhum valor e executarmos um `console.log()` nessa variável, o console vai nos retornar `undefined`, visto que nenhum valor foi definido para essa variável.

```js
let variavelSemValor

console.log(variavelSemValor)

// No console é retornado 👇
// undefined
```

## Null

A diferença do `null` para o `undefined` é que podemos assinar uma variavel como `undefined`, mas por boa prática usamos o `null` para informar que o valor é `vazio`, indefinido no momento e que pode ter um valor no futuro.

```js
let variavelComValorNulo = null

console.log(variavelComValorNulo)

// No console é retornado 👇
// null
```