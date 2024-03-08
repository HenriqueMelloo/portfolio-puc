// Aula 01 - Disciplina: [Programação Orientada a Objetos].

// Conceitos - Herança Prototype

// Definição do protótipo Pessoa
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

// Método do protótipo Pessoa
Pessoa.prototype.cumprimentar = function () {
    console.log('Olá, eu sou ' + this.nome + ' e tenho ' + this.idade + ' anos.');
};

// Definição do protótipo Estudante
function Estudante(nome, idade, curso) {
    // Chamada ao construtor pai para herdar propriedades
    Pessoa.call(this, nome, idade);

    // Propriedade específica de Estudante
    this.curso = curso;
}

// Herança prototipada: Estudante herda de Pessoa
Estudante.prototype = Object.create(Pessoa.prototype);
Estudante.prototype.constructor = Estudante;

// Método específico de Estudante
Estudante.prototype.estudar = function () {
    console.log(this.nome + ' está estudando no curso de ' + this.curso + '.');
};

// Criando uma instância de Estudante
var estudante1 = new Estudante('Pedro', 20, 'Engenharia');

// Usando métodos de Pessoa e Estudante
estudante1.cumprimentar(); // Saída: Olá, eu sou Pedro e tenho 20 anos.
estudante1.estudar();      // Saída: Pedro está estudando no curso de Engenharia.


/* Neste exemplo:

Criamos um novo construtor chamado Estudante, que possui uma propriedade adicional curso.
Usamos Pessoa.call(this, nome, idade); dentro do construtor de Estudante para garantir que as 
propriedades de nome e idade sejam definidas corretamente para um Estudante.
Estabelecemos a herança prototipada entre Pessoa e Estudante usando Object.create(Pessoa.prototype);. 
Isso faz com que Estudante.prototype herde de Pessoa.prototype.
Definimos um novo método estudar() específico para Estudante.
Criamos uma instância de Estudante chamada estudante1 e chamamos tanto o método cumprimentar() herdado 
de Pessoa quanto o método estudar() específico de Estudante.