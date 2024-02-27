//Disciplina: [Fundamentos de Computação e Algoritmos].

// Código integrando os conceitos apresentados:
// - Declaração de variável
// - Uso de comando de seleção
// - Uso de comando de repetição
// - Uso de função

function avaliarParidade(limiteSuperior) {
    for (let i = 0; i < limiteSuperior; i++) {
        if (i % 2 == 1)
            console.log(i + ' é um número Impar')
        else
            console.log(i + ' é um número PAR')

    }
}
avaliarParidade(10)