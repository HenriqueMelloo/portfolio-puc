// Aula 3 - Parte 2 - Disciplina: [Programação Orientada a Objetos].

let array = [4, 5, 6, 7, 8, 9, 10]; // Adicionado 'let' para declarar a variável array.

let regraImpar = (item) => item % 2 != 0; // Corrigido para identificar números ímpares.

console.log("Há algum número ímpar? " + array.some(regraImpar)); // Corrigido 'some' para verificar números ímpares.

//..... continuação

let regraPrimo = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++) {
        if ((item % divisor) == 0) {
            ndiv++;
        }
    }
    if (ndiv == 2) {
        return true;
    } else {
        return false;
    }
};

console.log("Há algum número primo? " + array.some(regraPrimo)); // Corrigido 'som' para 'some' para verificar números primos.
