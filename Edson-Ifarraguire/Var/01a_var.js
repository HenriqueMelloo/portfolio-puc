// Aula 3 - Parte 1 - Disciplina: [Programação Orientada a Objetos].

/* var
-- Declara uma variável com escopo de função.
-- Pode ter o valor de inicialização definido.*/

//01a_var.js
function testVar() {
    var var01 = "var 01"
    {
        var var02 = "var 02"
        console.log("01a." + var01)
        console.log("01b." + var02)
    }
    console.log("02a." + var01)
    console.log("02b." + var02)
}

testVar()

