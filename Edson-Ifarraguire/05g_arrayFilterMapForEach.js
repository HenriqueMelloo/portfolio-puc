// Aula 3 - Parte 2 - Disciplina: [Programação Orientada a Objetos].

// Juntando Operações

// Definição de um array de números
const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// Função para contar o número de divisores de um número
const nroDivisores = (item) => {
    let ndiv = 0; // Inicialização do contador de divisores
    for (let divisor = 1; divisor <= item; divisor++) { // Loop para verificar divisores
        if (item % divisor === 0) { // Se o número é divisível pelo divisor
            ndiv++; // Incrementa o contador de divisores
        }
    }
    return ndiv; // Retorna o número de divisores encontrados
};

// Filtra os números do array que têm exatamente 2 divisores
// e então mapeia cada número para um objeto com seu valor e se é par ou não
array
    .filter((nro) => nroDivisores(nro) === 2)
    .map((item) => { return { x: item, par: (item % 2) === 0 } })
    // Itera sobre cada objeto resultante e imprime se é par ou não
    .forEach((obj) => console.log(obj.x + " é par: " + obj.par));
