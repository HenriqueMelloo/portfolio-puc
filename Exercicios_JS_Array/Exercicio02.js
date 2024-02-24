// Exercício 02: Calcular a média de valores em um array

// Definindo o array com os valores
const numbers = [10, 20, 30, 40, 50];

// Utilizando o método reduce() para calcular a soma de todos os elementos no array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calculando a média dividindo a soma pelo número de elemtnos
const average = sum / numbers.length;

// Exibindo o resultado
console.log("A média dos número é: ", average);