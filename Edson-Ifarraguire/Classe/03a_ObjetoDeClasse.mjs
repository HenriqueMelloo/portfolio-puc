//Disciplina: [Fundamentos de Computação e Algoritmos].

/* Desestruturando Objetos {}
- Objetos podem também ser desestruturados em suas partes
pelo operador de atribuição.
- Ordem não importa, mapeamento é por identificador, suporta valores padrão.
- Identificador pode ser renomeado via "." */

//03a_ObjetoDeClasse.mjs

import { UmaClasse } from "./03a_umaClasse.mjs"

let umaClasse = new UmaClasse("Primeiro atributo")

let { capturaPrimeiroAtributo: umAtributo,
    outroAtributo } = umaClasse;

console.log("um Atributo: " + umAtributo)
console.log("Outro Atributo: " + outroAtributo)