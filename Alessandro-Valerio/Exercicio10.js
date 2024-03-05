// Conceitos - Herança

// Permite o compartilhamento de atributos e métodos entre objetos.

// Reaproveita código e agrupa o que é comum a diferentes objetos.

// Ajuda a eliminar redundâncias.

// Exemplo:

// Definição da classe Animal
class Animal {
    // Construtor para inicializar propriedades
    constructor(especie, nome, idade) {
        this.especie = especie;
        this.nome = nome;
        this.idade = idade;
        this.saude = 'Boa'; // Saúde padrão é boa
    }

    // Método para fazer o animal emitir um som
    emitirSom() {
        console.log(`${this.nome} (${this.especie}) faz algum som.`);
    }

    // Método para alimentar o animal
    alimentar() {
        console.log(`${this.nome} (${this.especie}) foi alimentado.`);
    }

    // Método para verificar a saúde do animal
    verificarSaude() {
        console.log(`A saúde de ${this.nome} (${this.especie}) é ${this.saude}.`);
    }
}

// Definição da classe AnimalDomestico que herda de Animal
class AnimalDomestico extends Animal {
    // Construtor para inicializar propriedades
    constructor(especie, nome, idade, dono) {
        super(especie, nome, idade); // Chama o construtor da classe pai (Animal)
        this.dono = dono;
        this.brincalhao = true; // Animal doméstico é brincalhão por padrão
    }

    // Método para brincar com o animal
    brincar() {
        console.log(`${this.nome} (${this.especie}) está brincando.`);
    }

    // Método para mostrar o dono do animal
    mostrarDono() {
        console.log(`${this.nome} (${this.especie}) pertence a ${this.dono}.`);
    }
}

// Criando uma instância de AnimalDomestico
let meuAnimalDomestico = new AnimalDomestico("Cachorro", "Max", 3, "João");

// Exemplo de utilização dos métodos do objeto AnimalDomestico
meuAnimalDomestico.emitirSom();         // Saída: Max (Cachorro) faz algum som.
meuAnimalDomestico.alimentar();          // Saída: Max (Cachorro) foi alimentado.
meuAnimalDomestico.brincar();            // Saída: Max (Cachorro) está brincando.
meuAnimalDomestico.verificarSaude();     // Saída: A saúde de Max (Cachorro) é Boa.
meuAnimalDomestico.mostrarDono();        // Saída: Max (Cachorro) pertence a João.

/* Definimos uma nova classe AnimalDomestico que herda de Animal usando a sintaxe class AnimalDomestico extends Animal.
O construtor da classe AnimalDomestico chama o construtor da classe pai (super(especie, nome, idade)) para inicializar
as propriedades herdadas. Adicionamos propriedades específicas de animais domésticos, como dono e brincalhao.
Implementamos métodos específicos de animais domésticos, como brincar() e mostrarDono().
Criamos uma instância de AnimalDomestico e demonstramos como usar os métodos herdados e específicos de animais domésticos.*/