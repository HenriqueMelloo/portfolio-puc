// Aula 3 - Parte 2 - Disciplina: [Programação Orientada a Objetos]..

// Define uma variável chamada 'somar' e atribui uma função de seta a ela que não possui parâmetros.
var somar = () => console.log("Função sem parametro")

// Chama a função 'somar'. Como a função não aceita parâmetros, apenas imprime "Função sem parametro" no console.
somar()

// Tenta chamar a função 'somar' com um argumento. Isso resultará em um erro, pois a função definida anteriormente não aceita parâmetros.
somar(1)

// Reatribui a variável 'somar' com uma nova função de seta que aceita um parâmetro, mas não o utiliza. 
// Esta nova função imprimirá "usando underscore" no console quando chamada.
somar = _ => console.log("usando underscore")

// Chama a função 'somar', que agora imprimirá "usando underscore" no console.
somar()

// Reatribui a variável 'somar' com uma função de seta que aceita dois parâmetros 'x' e 'y' e retorna a soma deles.
somar = (x, y) => x + y;

// Chama a função 'somar' com os argumentos '1' e '2'. 
// A função retornará a soma de '1' e '2', que é '3', e esse valor será impresso no console.
console.log(somar(1, 2));

// Reatribui novamente a variável 'somar', desta vez com uma função de seta que aceita dois parâmetros 'x' e 'y' 
// e explicitamente retorna a soma deles usando a palavra-chave 'return'.
somar = (x, y) => { return x + y };

// Chama novamente a função 'somar' com os argumentos '3' e '4'. 
// A função retornará a soma de '3' e '4', que é '7', e esse valor será impresso no console.
console.log(somar(3, 4));

