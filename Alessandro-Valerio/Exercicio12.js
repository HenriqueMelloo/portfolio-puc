// Aula 01 - Disciplina: [Programação Orientada a Objetos].

// Conceitos - Prototype

// Definição do protótipo
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

// Método do protótipo
Pessoa.prototype.cumprimentar = function () {
    console.log('Olá, eu sou ' + this.nome + ' e tenho ' + this.idade + ' anos.');
};

// Criação de instâncias
var pessoa1 = new Pessoa('João', 30);
var pessoa2 = new Pessoa('Maria', 25);

// Uso do método
pessoa1.cumprimentar(); // Saída: Olá, eu sou João e tenho 30 anos.
pessoa2.cumprimentar(); // Saída: Olá, eu sou Maria e tenho 25 anos.


/* Neste exemplo:

Pessoa é o construtor do protótipo.
this.nome e this.idade são propriedades da instância.
Pessoa.prototype.cumprimentar é um método do protótipo que todas as instâncias podem utilizar.
pessoa1 e pessoa2 são instâncias de Pessoa, criadas utilizando o operador new.
Ao chamar o método cumprimentar() em cada instância, é mostrada uma saudação personalizada para cada pessoa.
Este é um padrão básico para trabalhar com protótipos em JavaScript. 
Você pode expandir este exemplo adicionando mais propriedades e métodos conforme suas necessidades.