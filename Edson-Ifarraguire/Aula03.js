// Aula 3 -  Disciplina: [Programação Orientada a Objetos].

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

//01b_var.js
function testVar() {
    var var01 = "var 01"
    if (1 == 0) {
        var var02 = "var 02"
        console.log("01a." + var01)
        console.log("01b." + var02)
    }
    console.log("02a." + var01)
    console.log("02b." + var02)
}

testVar()


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
    {
        const const02 = "const 01"
        console.log("01a." + const01)
        console.log("02b." + const02)
    }

    testConst()