// Aula 01 - Disciplina: [Programação Orientada a Objetos].

// COMPARANDO POO & PE
// Soma de dois números 01:
let numero01 = 10;
let numero02 = 20

function add(n1, n2) {
    return n1 + n2;
}

let z = add(numero1, numero2);
console.log(z);

//--------------------------------------//
// Soma de dois números 02:
const calculadora = {
    numero1: 10,
    numero2: 20,
    soma: function () {
        return this.numero1 + this.numero2;
    }
};

console.log(calculadora.soma());

//--------------------------------------//
// Calculo Salário 01:

let horaExtra = 100;
let qtHoras = 20;
let salarioFixo = 5000;

function calculaSalario(horaExtra, qtHoras) {
    return salarioFixo + (horaExtra * qtHoras);
}

let total = calculaSalario(horaExtra, qtHoras);
console.log(total);

//--------------------------------------//
// Calculo Salário 02:

const empregado = {
    salarioFixo: 5000,
    valorHoraExtra: 100,
    horasExtras: 20,
    calculaSalario: function () {
        return this.salarioFixo +
            (this.valorHoraExtra * this.horasExtras);
    }
};

console.log(empregado.calculaSalario());