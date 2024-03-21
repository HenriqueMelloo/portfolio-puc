//Disciplina: [Fundamentos de Computação e Algoritmos].

/* JavaScript provê o método JSON.parse para converter uma
string no formato JSON em um objeto.*/

//01a_Parseobjeto.js
let user = '{"name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3]}';
// propriedade ainda não existe, logo teremos erro
//console.log(user.friens[0] ?? "Propriedade inexistente");

user = JSON.parse(user);
console.log(user.friends[0]);