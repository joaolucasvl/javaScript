let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdicionar = [6, 7, 8, 9, 10]

function vetoresNovos(vetorInicial, vetorAdicionar) {
    for (let i = 0; i < vetorAdicionar[i]; i++) {
        console.log(vetorAdicionar[i])
        vetorInicial.push(vetorAdicionar[i])
    }

    console.log(`Valores juntos: ${vetorInicial}`)
}

vetoresNovos(vetorPilha, vetorAdicionar)