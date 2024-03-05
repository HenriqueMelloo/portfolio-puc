// LITERAIS

var nomeDoObjeto = {
    nomeMembro1: valorMembro1,
    nomeMembro2: valorMembro2,
    nomeMembro3: valorMembro3
};

// FÁBRICAS
// Funções que criam e retornam objetos.

function criaPessoa() {
    return {
        nome: ['Fulano', 'de Tal'],
        anoDeNascimento: 1990,
        profissao: 'Estudante',
        calculaIdade: function () {
            return new Date().getFullYear() - this.anoDeNascimento;
        }
    };
};

const pessoa = criarPessoa();
console.log(pessoa);

//-------------------------------------//
//SYNTARX SUGAR
function criarPessoa(nome, anoDeNascimento, profissao) {
    return {
        nome,
        anoDeNascimento,
        profissao,
        calculaIdade: function () {
            return new Date().getFullYear() - this.anoDeNascimento;
        }
    };
};
const pessoa1 = criarPessoa("Fulano", 1990, "Estudante");
console.log(pessoa1);

const pessoa2 = criarPessoa("Fulano", 1990, "Estudante");
console.log(pessoa2);

const pessoa3 = criarPessoa("Fulano", 1990, "Estudante");
console.log(pessoa3);
