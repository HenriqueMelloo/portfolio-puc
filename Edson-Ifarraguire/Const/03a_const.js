// Aula 3  - Parte 1 - Disciplina: [Programação Orientada a Objetos].

/* const
-- Declara uma constante com escopo de bloco.
-- Atribuição única mas com valores de objeto alterável.*/

/* Const01 não pode receber novo valor.
-- Haverá um erro no comando: const01 = "novo valor"

    Const01 não é acessíveis fora do bloco
-- Haverá erro no comando: console.log("02b."+let02)*/

//03a_const.js
function testConst() {
    const const01 = "const 01"
    
        const const02 = "const 01"
        console.log("01a." + const01)
        console.log("02b." + const02)
    }

    testConst()