//Disciplina: [Fundamentos de Computação e Algoritmos].

//02a_criandoException.js

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function vaiDarErro() {
    throw new ValidationError("Dados inválidos!");
}

// .. continuação

try {
    vaiDarErro()
}
catch (e) {
    console.error(`${e.name}: ${e.message}`);
}