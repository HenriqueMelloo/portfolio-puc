//Disciplina: [Fundamentos de Computação e Algoritmos].

/* Desestruturando Objetos {}
- Objetos podem também ser desestruturados em suas partes
pelo operador de atribuição.
- Ordem não importa, mapeamento é por identificador, suporta valores padrão.
- Identificador pode ser renomeado via "." */



//03a_umaClasse.mjs
export class UmaClasse{
    #_umAtributo
    outroAtributo = "atributo dois"
    constructor(n){
        this.#_umAtributo = n
    }
    capturaPrimeiroAtributo(){
        return this.#_umAtributo
    }
}