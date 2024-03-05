// Conceitos - Classe Herança 

// Definição da classe Pessoa
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar() {
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Definição da classe Estudante, que herda de Pessoa
class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade); // Chama o construtor da classe pai (Pessoa)
        this.curso = curso;
    }

    estudar() {
        console.log(`${this.nome} está estudando no curso de ${this.curso}.`);
    }
}

// Criando uma instância de Estudante
let estudante1 = new Estudante('Pedro', 20, 'Engenharia');

// Usando métodos de Pessoa e Estudante
estudante1.cumprimentar(); // Saída: Olá, eu sou Pedro e tenho 20 anos.
estudante1.estudar();      // Saída: Pedro está estudando no curso de Engenharia.

/* Neste exemplo:

Definimos a classe Pessoa com um construtor e um método cumprimentar().
Definimos a classe Estudante que estende (herda) de Pessoa usando a palavra-chave extends.
No construtor de Estudante, usamos super() para chamar o construtor da classe pai (Pessoa) e inicializar as propriedades herdadas.
Adicionamos um método específico de Estudante chamado estudar().
Criamos uma instância de Estudante e chamamos os métodos cumprimentar() e estudar().