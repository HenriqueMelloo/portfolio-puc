// Aula 3 - Parte 2 - Disciplina: [Programação Orientada a Objetos]..

// Array.filter()

array = [4, 5, 6, 7, 8, 9, 10]

regraImpar = (item) => item % 2 != 0

console.log("Filtrar números impar? " +
    array.filter(regraImpar))


//...continuação

let regraPrimo = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++) {
        if (item % divisor === 0) {
            ndiv++
        }
    }
    if (ndiv === 2) {
        return true
    } else {
        return false
    }
};

console.log("Filtrar os números primos? " + array.filter(regraPrimo));
