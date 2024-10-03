let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

let maior = numeros[0]
let menor = numeros[0]

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i]
    }
    if (numeros[i] < menor) {
        menor = numeros[i]
    }
}

console.log(maior)
console.log(menor)
