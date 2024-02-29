// Aula 01 - Disciplina: [Programação Orientada a Objetos].

// OBJETO.METODO() COM PARÂMETRO

var pessoa = {
    nome:"Valentina",
    idade: 60,
    saudar: function(nomeAmigo){
        console.log("Olá" + nomeAmigo);
    }
};

console.log(pessoa.saudar("Joana"));