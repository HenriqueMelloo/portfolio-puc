// Conceitos - Identificador Pré-fixado

// Exemplo: 

class Exemplo {
    // Definindo uma classe chamada Exemplo
    #variavelPrivada = 10;
    // Declarando um campo de classe privado chamado #variavelPrivada e atribuindo o valor 10 a ele

    obterVariavelPrivada() {
        // Definindo um método chamado obterVariavelPrivada
        return this.#variavelPrivada;
        // Retornando o valor do campo de classe privado #variavelPrivada
    }

    definirVariavelPrivada(novoValor) {
        // Definindo um método chamado definirVariavelPrivada, que aceita um parâmetro novoValor
        this.#variavelPrivada = novoValor;
        // Atribuindo o novoValor ao campo de classe privado #variavelPrivada
    }
}

const obj = new Exemplo();
// Criando uma nova instância da classe Exemplo e atribuindo-a a uma variável chamada obj

console.log(obj.obterVariavelPrivada());
// Imprimindo o valor do campo de classe privado #variavelPrivada, usando o método obterVariavelPrivada da instância obj
// Saída: 10

obj.definirVariavelPrivada(20);
// Chamando o método definirVariavelPrivada da instância obj para definir um novo valor para o campo de classe privado #variavelPrivada

console.log(obj.obterVariavelPrivada());
// Imprimindo novamente o valor do campo de classe privado #variavelPrivada após a modificação
// Saída: 20




/*Neste exemplo, #variavelPrivada é uma variável privada dentro da classe Exemplo. 
Ela só pode ser acessada e modificada por métodos dentro dessa classe. 
Isso proporciona um encapsulamento mais forte e ajuda a evitar interferências externas indesejadas.
É importante notar que os campos de classe privados usando this.# são acessíveis apenas dentro da própria classe. 
Eles não são herdados por subclasses e não são acessíveis fora da classe. 
Isso ajuda a manter a integridade dos dados encapsulados dentro de uma classe.*/