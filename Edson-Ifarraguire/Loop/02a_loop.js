// Aula 3 - Parte 2 - Disciplina: [Programação Orientada a Objetos]..

// Comando de repetição tipo for.

// Declaração de um array vazio 'a'.
var a = []
// Atribuição de valores aleatórios para os índices 0, 1 e 9 do array 'a' usando o método Math.random().
a[0] = Math.random()
a[1] = Math.random()
a[9] = Math.random()
// Imprime o comprimento do array 'a' no console.
console.log(a.length)

// .. Primeiro for
// Imprime uma mensagem indicando o tipo de loop.
console.log(" -for .. in- ")
// Imprime uma linha separadora.
console.log(" -=-=-=- ")
// Loop 'for..in' para iterar sobre as propriedades enumeráveis do objeto.
for (let val in a)
    // Imprime o índice do elemento atual no array 'a'.
    console.log(" --> " + val)
// Imprime uma linha separadora.
console.log(" -=-=-=-=- \n")

// Segundo for
// Imprime uma mensagem indicando o tipo de loop.
console.log(" -for .. of- ")
// Imprime uma linha separadora.
console.log(" -=-=-=- ")
// Loop 'for..of' para iterar sobre os elementos do array.
for (let val of a)
    // Imprime o valor do elemento atual no array 'a'.
    console.log(" --> " + val)
// Imprime uma linha separadora.
console.log(" -=-=-=-=- \n")

// Terceiro for
// Imprime uma mensagem indicando o tipo de loop.
console.log(" -for (;;))- ")
// Imprime uma linha separadora.
console.log(" -=-=-=- ")
// Loop 'for' tradicional, usando uma variável de controle 'i' para acessar os elementos do array através de seus índices.
for (let i = 0; i < a.length; i++)
    // Imprime o índice e o valor do elemento atual no array 'a'.
    console.log(" --> " + i + ": " + a[i])
