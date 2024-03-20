//Disciplina: [Fundamentos de Computação e Algoritmos].

//• Definição do módulo (03a_definicao_ES6.mjs):
//• Exportando funções no objeto padrão

// 03a_definicao_ES6.mjs
export function area(r) { return Math.PI * r ** 2; }
export function circunferencia(r) { return 2 * Math.PI * r; }

// 03a_consumidor_es6.mjs
import * as circulo from "./03a_definicao_ES6.mjs";
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);
console.log(`Circunferência do círculo de raio 4 é ${circulo.circunferencia(4)}`);
