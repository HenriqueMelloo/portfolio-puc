// Exercício 01: Verificar se um elemtno está presente no array

// Definindo o array com os valores
const numbers = [10, 20, 30, 40, 50];

// Definindo o elemento a ser verificado
const elementToFind = 60;

// Utilizando o método includes() para verificar se o elemtno está presente no array
const found = numbers.includes(elementToFind);

// Exibindo o resultado
if (found) {
    console.log("O elemento", elementToFind, "foi encontrado no array.");
} else {
    console.log("O elemento", elementToFind, "não foi encontrado no array.");
}


