//Disciplina: [Fundamentos de Computação e Algoritmos].
const fs = require('fs')

fs.readFile(
    '01a_textoQualquer.txt',
    (err, buf) => {
        if (err)
            console.log("houve um erro")
        else
            console.log(buf.toString())
    })
