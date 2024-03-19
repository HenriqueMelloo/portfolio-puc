// Aula 3  - Parte 1 - Disciplina: [Programação Orientada a Objetos].

/*Exemplo: 02 */

//03b_const.js

function testConst() {
    const const01 = { propriedade: "valor" }
    console.log("01a." + const01.propriedade)

    const01 = { propriedade: "novo valor" }
    console.log("02a." + const01.propriedade)
}

testConst()