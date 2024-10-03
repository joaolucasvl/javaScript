let numero = 1
{ // Escopo de bloco
    let numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)