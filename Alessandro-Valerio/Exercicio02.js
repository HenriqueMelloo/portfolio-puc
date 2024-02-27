// Aula 01 - Disciplina: [Fundamentos de Computação e Algoritmos].

let horaExtra = 100;
let qHoras = 20;
let salarioFixo = 5000;

function calculaSalario(horaExtra, qtHoras) {
    return salarioFixo + (horaExtra * qtHoras);
}

let total = calculaSalario(horaExtra, qHoras);
console.log(total);