//Disciplina: [Fundamentos de Computação e Algoritmos].

//01a_firstException.js
try {
    throw new Error('Gerando um erro genérico!');
}
catch (e) {
    console.error(`${e.name}: ${e.message}`);
}