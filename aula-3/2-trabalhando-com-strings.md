# Trabalhando com Strings

Para concatenar (juntar) duas ou mais strings no Javascript, você pode fazer de duas formas, através de `Template String` como já vimos anteriormente, ou através do operador `+`.

Exemplos:

```js
// Declarando as variáveis
const frase1 = "Olá"
const frase2 = "Mundo!"

// Usando o operador +
console.log(frase1 + frase2) // OláMundo!
console.log(frase1 + " " + frase2) // Olá Mundo!

// Usando template string
console.log(`${frase1} ${frase2}`) // Olá Mundo!
```