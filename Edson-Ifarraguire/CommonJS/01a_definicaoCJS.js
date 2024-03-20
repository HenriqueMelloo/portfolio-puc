//Disciplina: [Fundamentos de Computação e Algoritmos].

// Módulo - CommonJS

/* Definição do módulo (01a_definicao.js):
-- Exporta funções no objeto padrão*/

exports.area = (r) => Math.PI * r ** 2;
exports.circunferencia = (r) => 2 * Math.PI * r;

// Importando o módulo (01a_consumidor.js)

const circulo = require('./01a_definicaoCJS.js');
console.log(`Área do círculo de raio 2 é ${circulo.area(4)}`);

//desestruturando o objeto e acessando a função diretamente
const { area } = require('./01a_definicaoCJS.js');
console.log(`Área do circulo de raio 2 é ${area(2)}`);