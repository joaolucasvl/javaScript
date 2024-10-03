function multVetor(vetor1 = [], vetor2 = []) {
    let mult = 0

    for(let i = 0; i < multVetor.length; i++) {
        mult += vetor1[i] * vetor2[i]
    }
    console.log(mult)
}

multVetor([1, 6, 4], [6, 4, 2])