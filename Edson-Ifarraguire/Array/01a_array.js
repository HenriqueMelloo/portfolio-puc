//Disciplina: [Fundamentos de Computação e Algoritmos].

// Desestruturando Array []

/* A operação de atribuição pode utilizar um modo de "desestruturação"
que permite funcionalidades interessantes.
-- A ideia é "desempacotar" um array em vários "espaços"*/

//01a_array.js

let nomeCompleto = ['Edson', 'Ifarraguirre', "Moreno"];
var [primeiroNome, nomeDoMeio, ultimoNome] = nomeCompleto;

console.log("O primeiro nome é: " + primeiroNome)
console.log("O nome do meio é: " + nomeDoMeio)
console.log("O último nome é: " + ultimoNome)

var [primeiroNome, ...restante] = nomeCompleto
console.log("O primeiro nome é: " + primeiroNome)
console.log("O restante do nome é: \"" + restante.toString().replace(',', '') + '"')

var [soOPrimeiroNome, , soOUltimoNome] = nomeCompleto
console.log("O primeiro nome é: " + soOPrimeiroNome)
console.log("O último nome é: " + soOUltimoNome)