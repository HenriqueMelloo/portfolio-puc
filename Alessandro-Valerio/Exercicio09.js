// Aula 01 - Disciplina: [Programação Orientada a Objetos].

// Conceitos - Abstração

// POO é amplamente baseada na abstração digital da vida real.

// Objetos são representações/abstrações do que queremos implementar
// do que observamos no mundo ao nosso redor.

// Buscamos o essencial e deixamos de lado o que não importa,
// focamos no que realmente precisamos representar e nosso objeto.

// Exemplo:

// Definição da classe Carro
class Carro {
    // Construtor para inicializar propriedades
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidade = 0;
    }

    // Método para acelerar o carro
    acelerar(incremento) {
        this.velocidade += incremento;
        console.log(`O ${this.marca} ${this.modelo} acelerou para ${this.velocidade} km/h.`);
    }

    // Método para frear o carro
    frear(decremento) {
        this.velocidade -= decremento;
        console.log(`O ${this.marca} ${this.modelo} reduziu para ${this.velocidade} km/h.`);
    }

    // Método para ligar o carro
    ligar() {
        console.log(`O ${this.marca} ${this.modelo} ligou.`);
    }

    // Método para desligar o carro
    desligar() {
        console.log(`O ${this.marca} ${this.modelo} desligou.`);
    }
}

// Criando uma instância de Carro
let meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");

// Exemplo de utilização dos métodos do objeto Carro
meuCarro.ligar();       // Saída: O Toyota Corolla ligou.
meuCarro.acelerar(50);  // Saída: O Toyota Corolla acelerou para 50 km/h.
meuCarro.frear(20);     // Saída: O Toyota Corolla reduziu para 30 km/h.
meuCarro.desligar();    // Saída: O Toyota Corolla desligou.

/*A classe Carro é definida, representando a abstração de um carro.
O construtor é usado para inicializar as propriedades do carro, como marca, 
modelo, ano, cor e velocidade.

Métodos como acelerar, frear, ligar e desligar são definidos para interagir com o carro.
Na criação de uma instância (meuCarro) do objeto Carro, podemos usar os métodos para operr
o carro de maneira simplificada, sem se preocupar com os detalhes de implementação subjacentes.

Isso exemplifica a abstração, pois os detalhes internos do funcionamento do carro estão ocultos, 
e podemos nos concentrar apenas nas operações que desejamos realizar. */