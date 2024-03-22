//Disciplina: [Fundamentos de Computação e Algoritmos].

const { promiseHooks } = require("v8");

const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Rejeitado"), 2000);
});

promise
    .then(
        result => { console.log(result); return "valor" })
    .then(
        result => console.log(result))
    .catch(
        error => console.log(error));

console.log("fim do programa")
