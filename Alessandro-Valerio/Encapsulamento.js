// Conceitos - Encapsulamento

// Permitir que atributos e métodos sejam
// agrupados de certa forma em uma interface bem definida
// para manipular os dados de um objeto de forma eficiente.

// Isolamento entre partes de um programa.
// Saber o que um objeto faz e não como ele faz.
// Proteção de atributos.

// Exemplo:

const empregado = {
    salarioFixo: 5000, // Propriedade pública: encapsula o salário fixo do empregado.
    valorHoraExtra: 100, // Propriedade pública: encapsula o valor da hora extra do empregado.
    horasExtras: 20, // Propriedade pública: encapsula o número de horas extras trabalhadas pelo empregado.
    calculaSalario: function () {
        return this.salarioFixo + // Acesso encapsulado à propriedade salarioFixo.
            (this.valorHoraExtra * this.horasExtras); // Acesso encapsulado às propriedades valorHoraExtra e horasExtras.
    }
};

console.log(empregado.calculaSalario()); // Chamada encapsulada ao método calculaSalario para obter o salário total do empregado.
