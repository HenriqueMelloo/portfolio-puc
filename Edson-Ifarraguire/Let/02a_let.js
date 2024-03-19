// Aula 3 - Parte 1 - Disciplina: [Programação Orientada a Objetos]..

/* let
-- Declara uma variável com escopo de bloco ou variável local.
-- Pode ter o valor de inicialiação definido.*/

//02a_let.js
function testVar() {
    let let02 = "let 01"
    {
        let let02 = "let 02"
        console.log("01a." + let01)
        console.log("01b." + let02)
    }
    console.log("02a." + let01)
    console.log("02b." + let02)
}

testVar()