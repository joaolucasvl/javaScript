const valores = [7.7, 8.9, 4.6, 5.7]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // Retira o ultimo elemento do array
delete valores[0]
console.log(valores)

console.log(typeof valores)
