//Disciplina: [Fundamentos de Computação e Algoritmos].

//04a_definicao_ES6.mjs
export class Circulo {
    constructor(r) {
        this.raio = r;
    }
    area() {
        return Math.PI * this.raio ** 2;
    }
    circuferencia() {
        return 2 * Math.PI * this.raio;
    }
}