// Undefined significa que o valor nunca existiu, não foi definido em nenhum contexto, indefinido

let variavelSemInicializacao

console.log(
  variavelSemInicializacao,
  typeof(variavelSemInicializacao)
)

variavelSemInicializacao = "Olá mundo"

console.log(
  variavelSemInicializacao,
  typeof(variavelSemInicializacao)
)

variavelSemInicializacao = null

console.log(
  variavelSemInicializacao,
  typeof(variavelSemInicializacao)
)

// A diferença do UNDEFINED E NULL é que podemos assinar uma variavel como UNDEFINED, mas por boa prática usamos o NULL, pra informar que o valor é vazio, indefinido no momento e que pode ter um valor no futuro

// EXERCICIOS

// 1. Quando uma variável em javascript é criada como `let podeViajar = null`, qual é o tipo de `podeViajar` ? *
// () O código gera um erro e não roda
// () object
// () undefined

// 2. É correto afirmar que:
// () null e undefined são valores usados para falar que uma variável é vazia ou não possui valor definido
// () undefined é um valor e tipo de valor usado no Javascript para assinar valores quando não se sabe o tipo
// () undefined é um valor e tipo de valor usado no Javascript para informar que o dado não existe ou não foi definido, enquanto o valor de null é usado para informar que uma variável nasceu sem valor

// 3. Quando uma variável em javascript é criada como `let podeViajar`, qual é o valor de `podeViajar` ? *
// () null
// () undefined
// () O código gera um erro e não roda