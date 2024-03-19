// Aula 3 - Parte 2 - Disciplina: [Programação Orientada a Objetos]..

// Funções com parâmetro

// Declaração de uma função chamada 'potencia' que recebe dois parâmetros: 'base' e 'expoente'. O parâmetro 'expoente' tem um valor padrão de 2.
function potencia(base, expoente = 2) {
    // Declaração de uma variável 'resultado' e inicialização com o valor 1.
    let resultado = 1;
    // Laço de repetição 'for' que itera de 0 até 'expoente - 1', multiplicando 'resultado' pela 'base' a cada iteração.
    for (let cont = 0; cont < expoente; cont++) {
        resultado *= base;
    }
    // Retorna o valor de 'resultado' após o término do laço.
    return resultado;
}

// Chamada da função 'potencia' sem argumentos, utilizando o valor padrão de 'expoente'. Imprime o resultado no console.
console.log(potencia());
// Chamada da função 'potencia' com argumento '4' para 'base', utilizando o valor padrão de 'expoente'. Imprime o resultado no console.
console.log(potencia(4));
// Chamada da função 'potencia' com argumentos '2' para 'base' e '6' para 'expoente'. Imprime o resultado no console.
console.log(potencia(2, 6));
// Chamada da função 'potencia' com argumentos '2' para 'base', '6' para 'expoente' e '18' adicionado (não utilizado). Imprime o resultado no console.
console.log(potencia(2, 6, 18));

