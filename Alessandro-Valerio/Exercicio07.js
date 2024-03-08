// Aula 01 - Disciplina: [Programação Orientada a Objetos].

// Conceitos - Polimorfismo

// Através da herança é possível alterar um comportamento
// herdado de um objeto-pai.

// Permite uma forte separação de interesses.

// Limpeza de código, removendo lógica excedente.

// Exemplo:

// Definição da classe Usuario
class Usuario {
    // Construtor para inicializar propriedades
    constructor(nome) {
        this.nome = nome;
    }

    // Método para apresentar o usuário
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
}

// Definição da classe UsuarioComum que herda de Usuario
class UsuarioComum extends Usuario {
    // Sobrescrevendo o método apresentar para o usuário comum
    apresentar() {
        console.log(`Olá, eu sou o usuário comum ${this.nome}.`);
    }
}

// Definição da classe UsuarioAdmin que herda de Usuario
class UsuarioAdmin extends Usuario {
    // Sobrescrevendo o método apresentar para o usuário admin
    apresentar() {
        console.log(`Olá, eu sou o administrador ${this.nome}.`);
    }
}

// Criando instâncias de diferentes tipos de usuários
let usuario1 = new Usuario("João");
let usuarioComum1 = new UsuarioComum("Maria");
let usuarioAdmin1 = new UsuarioAdmin("Carlos");

// Demonstrando o polimorfismo
usuario1.apresentar();        // Saída: Olá, meu nome é João.
usuarioComum1.apresentar();   // Saída: Olá, eu sou o usuário comum Maria.
usuarioAdmin1.apresentar();   // Saída: Olá, eu sou o administrador Carlos.

/* Definimos uma classe base Usuario com um método apresentar() genérico.
Criamos classes derivadas UsuarioComum e UsuarioAdmin, cada uma com seu próprio 
método apresentar() que reflete o tipo de usuário.

Ao criar instâncias de UsuarioComum e UsuarioAdmin, o polimorfismo entra em ação: 
chamando o mesmo método apresentar(), diferentes saídas são produzidas dependendo do tipo de usuário.
Isso demonstra o polimorfismo, onde objetos de diferentes classes respondem de forma diferente ao mesmo método.*/