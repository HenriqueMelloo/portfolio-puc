// Aula 3 - Parte 2 - Disciplina: [Programação Orientada a Objetos].

/// Função como argumento

// Declaração da função 'decision' que recebe três parâmetros: 'question', 'doOK' e 'doCancel'.
function decision(question, doOK, doCancel) {
    // Verifica se a 'question' é igual a "OK".
    if (question == "OK")
        // Se for "OK", executa a função 'doOK'.
        doOK();
    else if (question == "Cancel")
        // Se for "Cancel", executa a função 'doCancel'.
        doCancel();
}

// Declaração da função 'showOk'.
function showOk() { console.log("You agreed. "); }

// Declaração da função 'showCancel'.
function showCancel() { console.log("You canceled the execution. "); }

// Chamada da função 'decision' com a string "OK" como 'question', a função 'showOk' como 'doOK' e a função 'showCancel' como 'doCancel'.
decision("OK", showOk, showCancel);
// Chamada da função 'decision' com a string "Cancel" como 'question', a função 'showOk' como 'doOK' e a função 'showCancel' como 'doCancel'.
decision("Cancel", showOk, showCancel);
