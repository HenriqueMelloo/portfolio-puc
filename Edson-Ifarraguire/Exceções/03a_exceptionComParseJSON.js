//Disciplina: [Fundamentos de Computação e Algoritmos].

//03a_exceptionComParseJSON.js
let json = "incorreto"

try {
    let pessoa = JSON.parse(json);
    console.log(pessoa.name);
}
catch (err) {
    if (err instanceof SyntaxError) {
        console.log(`Erro ${err.name}: ${err.message}`);
    } else {
        console.log("Relança a exceção pois não sabe como tratar");
        throw err;
    }
}
finally {
    console.log("Encerra tratamento")
}