// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(1, 9)

// Funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))