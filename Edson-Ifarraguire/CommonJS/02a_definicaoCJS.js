//Disciplina: [Fundamentos de Computação e Algoritmos].

// Definição do módulo (02_definicao.js): exportando objeto

// 02a_definicaoCJS.js - ALTERNATIVA A

class Circulo {
    constructor(r) {
        this.raio = r;
    }
    area() {
        return Math.PI * this.raio ** 2;
    }
    circunferencia() {
        return 2 * Math.PI * this.raio;
    }
}

module.exports = Circulo;

// Importando o módulo:

// 02b_utilizaCJS.js
const CirculoDefinido = require('./02a_definicaoCJS.js');

const c1 = new CirculoDefinido(4);
console.log(`Área do círculo de raio 4 é ${c1.area()}`);
