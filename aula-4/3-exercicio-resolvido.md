# Exercício Resolvido

Faça um programa que receba 4 notas (referente à 4 bimestres em uma escola) e calcule a média, depois, informe se o aluno foi aprovado (nota maior que 6) ou reprovado (nota igual a 6 ou menor).

Use as funções nativas `alert` e `prompt` para coletar e exibir os valores.

```js
const nome = prompt('Qual é o seu nome?')
const nota1 = Number(prompt('Qual é a sua nota do primeiro bimestre?'))
const nota2 = Number(prompt('Qual é a sua nota do segundo bimestre?'))
const nota3 = Number(prompt('Qual é a sua nota do terceiro bimestre?'))
const nota4 = Number(prompt('Qual é a sua nota do quarto bimestre?'))

const media = (nota1 + nota2 + nota3 + nota4) / 4

if (media > 6) {
  alert(`${nome}, sua média final foi ${media} e vc está aprovado!`)
} else {
  alert(`${nome}, sua média final foi ${media} e vc está reprovado!`)
}
```