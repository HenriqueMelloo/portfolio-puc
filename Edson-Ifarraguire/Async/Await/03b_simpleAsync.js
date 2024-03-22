//Disciplina: [Fundamentos de Computação e Algoritmos].

//03b_simplesAsync.js

async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Pedido atendido"), 2000);

    });
    let resultado = await promise;
    return resultado;
}

console.log("Iniciando o programa")
fazAlgo().then((msg)=> console.log(msg))
console.log("Finalizando o programa")
