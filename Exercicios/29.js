let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let intevalo = 0
let foraIntervalo = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 10 && numeros[i] <= 20) {
        intevalo++
    }
    else {
        foraIntervalo++
    }
}

console.log(intevalo)
console.log(foraIntervalo)