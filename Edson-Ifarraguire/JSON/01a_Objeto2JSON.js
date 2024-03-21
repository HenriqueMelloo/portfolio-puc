//Disciplina: [Fundamentos de Computação e Algoritmos].

/* JSON
- JavaScript provê o método JSON.stringfy
- Converte um objeto para o formatoJSON (STRING)
- Cuidado: não pode existir referência circulares dentro do objeto*/

//01a_Objeto2JSON.js
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);
console.log(json);
