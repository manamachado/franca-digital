# Trabalhando com Numbers

No Javascript também podemos fazer operações com numbers.

No exemplo abaixo, veremos como somar dois valores:

```js
// Somando 2 salários com o operador "+"

let meuSalario = 1200.50
let salarioDoAmigo = 1000

console.log(`A soma do meu salario com o salario do meu amigo é R$ ${meuSalario + salarioDoAmigo}`)

// No console é retornado 👇
// A soma do meu salário com o salário do meu amigo é R$ 2200.50
```

Mas, suponhamos que um desses valores seja uma string.

```js
let meuSalario = 1200.50
let salarioDoAmigo = "1000"
```

Ao fazer a operação de soma, o Javascript concatena os valores:

```js
console.log(`A soma do meu salario com o salario do meu amigo é R$ ${meuSalario + salarioDoAmigo}`)

// No console é retornado 👇
// A soma do meu salário com o salário do meu amigo é R$ 1200.51000
```

Para resolver esse problema, basta usarmos a função `Number` do Javascript (com a primeira letra maiúscula)

```js
let meuSalario = 1200.50
let salarioDoAmigo = Number("1000")
```

Dessa forma, o Javascript realiza a conversão de string pra number e realiza a operação corretamente, retornando no console:

```js
// A soma do meu salário com o salário do meu amigo é R$ 2200.50
```