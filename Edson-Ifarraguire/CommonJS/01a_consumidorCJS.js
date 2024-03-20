//Disciplina: [Fundamentos de Computação e Algoritmos].

// Módulo - CommonJS

/* Definição do módulo (01a_consumidor.js):
-- Exporta funções no objeto padrão*/

//01a_consumidorCJS.js
const circulo = require('./01a_definicaoCJS.js');
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);

//desestruturando o objeto e acessando a função diretamente
const { area } = require('./01a_definicaoCJS.js');
console.log(`Área do círculo de raio 2 é ${area(2)}`);