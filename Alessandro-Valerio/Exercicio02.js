// Aula 01 - Disciplina: [Programação Orientada a Objetos].

let horaExtra = 100;
let qHoras = 20;
let salarioFixo = 5000;

function calculaSalario(horaExtra, qtHoras) {
    return salarioFixo + (horaExtra * qtHoras);
}

let total = calculaSalario(horaExtra, qHoras);
console.log(total);