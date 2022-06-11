// Trazendo para o mundo real, variáveis são como gavetas de um armário, onde podemos colocar valores ali dentro e acessar quando desejarmos.

// Para criar uma variável, precisamos definir qual é o tipo dessa variável, nesse caso, estamos usando o "let"
// Em seguida, colocamos um identificador dessa variável, que nesse caso são as palavras "nome", "idade" e "poder"
// Use palavras que façam sentido e que sejam fáceis de serem identificadas
let nome = "Super man";
let idade = 100;
let poder = "Super força";

nome = "Batman";
poder = "Rico";
console.log(
  `
    Nome: ${nome}
    Idade: ${idade}
    Poder: ${poder}
  `
)


// OBS. PROVOCAR UM ERRO INVOCANDO UMA VARIÁVEL NÃO DECLARADA E IDENTIFICAR ESSE ERRO

// Falar sobre palavras reservadas na declaração de variáveis: class, function
// https://www.w3schools.com/js/js_reserved.asp

// Diferença entre var, let e const
// No JS existem formas diferentes de se fazer a mesma coisa, e isso pode acabar confundindo quem está aprendendo
// Até 2015, usava-se a palavra "var" para criarmos variáveis, e esse tipo de declaração não se usa mais atualmente
// Hoje usamos "let" para valores que podem ser alterados e "const" para valores que nunca serão alterados
let contador = 0;
contador = contador + 1;

const identidadeSecreta = "Bruce Wayne";

// QUIZ

// 1. Qual é a função da variável criada com a palavra chave `const`? *
// () Criar variáveis que podem ser re-assinadas
// () Não se deve Usar `const` para criar variáveis
// () Criar variáveis que nunca se alteram

// 2. O tipo da variável criada com a palavra chave var é usada para: *
// () Não deve ser mais usada
// () Guardar informações de datas
// () Guardar valores dos tipos inteiro e texto

// 3. Qual é a função da variável criada com a palavra chave `let`? *
// () Não se deve Usar `let` para criar variáveis
// () Criar variáveis que podem ser re-assinadas
// () Criar variáveis que nunca se alteram

// 4. Qual é o real motivo de usar variáveis no Javascript? *
// () Deixar o código mais bonito
// () Replicar código
// () Definir valores que podem ser alterados, com um único ponto de alteração

// 5. Como se exibe resultados no terminal usando Javascript? *
// () console.mostrar
// () console.log
// () console.show