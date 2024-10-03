const notas = [6.7, 8.9, 3.9, 4.0, 9.0]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 60
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}