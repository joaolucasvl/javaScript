function classificacaoNotas(nota) {
    const arredondamento = Math.ceil(nota / 5) * 5; // Arredondar para multiplo de 5

    if (arredondamento >= 40) {
        console.log(`Sua nota é de ${arredondamento}, você está APROVADO.`)
    }
    else {
        console.log(`Sua nota é de ${arredondamento}, você está REPROVADO.`)
    }
}

classificacaoNotas(86)