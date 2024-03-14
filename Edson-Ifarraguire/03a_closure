// Aula 3 - Parte 2 - Disciplina: [Programação Orientada a Objetos].

// Funções de fechamento (closure)

/* Funcção que se "lembra" do ambiente em que ela foi criada
-- Permite associar dados do ambiente em que trabalha estes dados.
    * Execução com contexto
    * Diretamente ligado com programação orinetada a objetos
    * Objetos nos permitem associar dados utilizando um ou mais métodos.*/

function somaValores(x) {
    // Define uma função chamada somaValores que recebe um parâmetro 'x'
    return function (y) {
        // Retorna uma função anônima que recebe um parâmetro 'y'
        return x + y;
        // Retorna a soma de 'x' (variável do ambiente de somaValores) e 'y' (parâmetro da função anônima)
    };
    // Encerra a definição da função interna
}
// Encerra a definição da função somaValores


console.log(soma5(2)); var soma5 = somaValores(5);
// Chama a função somaValores com o argumento 5 e atribui o resultado à variável soma5
