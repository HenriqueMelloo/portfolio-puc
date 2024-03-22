//Disciplina: [Fundamentos de Computação e Algoritmos].

//03c_simplesAsync.js

async function fazAlgo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Pedido atendido"), 2000);

    });
    let resultado = await promise;
    return resultado;
}

async function main() {
    console.log("Iniciando o programa")
    console.log(aeait(fazAlgo()))
    console.log("Finalizando o programa")
}

main()