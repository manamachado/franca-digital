// TRABALHANDO COM STRINGS E NUMBERS



let salariodoAmigo = 1000
let meuSalario = "2000"
console.log(salariodoAmigo + meuSalario)

// Falar sobre a concatenação dos valores da operação acima quando somados

console.log(
  typeof(salariodoAmigo), salariodoAmigo
)

console.log(
  typeof(meuSalario), meuSalario
)

// Para corrigir, podemos remover as aspas ou podemos usar a palavra-chave Number, ela faz a conversão de string para number:

let meuSalarioCorrigido = Number(meuSalario)
console.log(salariodoAmigo + meuSalarioCorrigido)

// Vamos imaginar que por alguma razão, alguém tenha digitado alguma informação errada, como por exemplo:

// let meuSalario = "2000aaa";

// Quando vamos converter esse valor, é apresentado uma nova palavra-chave : NaN
// NaN significa "NOT A NUMBER" e por isso ele não consegue converter
// Podemos fazer uma verificação isNaN(variavel) e depois tomar alguma decisão
// Os dados que estão sendo mostrados, vamos entender mais pra frente :)

// Também podemos usar valores quebrados

// let meuSalario = "2000.14"

// Podemos exibir todas as informações em uma única string

let minhaStringComVariaveis = `A soma do meu salario com o salario do meu amigo é R$ ${salariodoAmigo + meuSalarioCorrigido}`

console.log(minhaStringComVariaveis)

// EXERCICIOS

// 1. Qual é o resultado de "100" + 100?
// () 100100
// () 200
// () "200"

// 2. Como saber o tipo de uma variável?
// () type()
// () typeof()
// () instanceof()

// 3. Como saber se uma string é um número válido?
// () Number.isNumber("123abc")
// () isNaN("123abc")
// () Number("123abc")
// () isNumber("12abc")

// 4. Como converter uma string para um número?
// () Number("100")
// () Integer("100")
// () StringToNumber("100")