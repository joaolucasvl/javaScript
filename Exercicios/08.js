function analisarJogos(pontuacoes) {
    const pontosArray = pontuacoes.split(' ').map(Number) // converter string em numeros

    if (pontosArray.length === 0) {
        return [0, -1]; // Caso não haja jogos
    }
    
    let melhorPontuacao = pontosArray[0]
    let piorPontuacao = pontosArray[0]
    let recordesBatidos = 0
    let indicePiorJogo = 0

    // Percorrer o Array e validar
    for (let i = 1; i < pontosArray.length; i++) {
        const pontos = pontosArray[i]

        // Verificar se bateu o record
        if (pontos > melhorPontuacao) {
            recordesBatidos ++
            melhorPontuacao = pontos // Atualizar o melhor
        }

        // Verificar se foi o pior jogo
        if (pontos < piorPontuacao) {
            piorPontuacao = pontos // Atualizar o pior
            indicePiorJogo = i; // Salva o índice do pior jogo
        }
    }

    console.log(`Numero de vezes que ele bateu o record de pontos ${recordesBatidos}`)
    console.log(`Numero de vezes que ele não fez um jogo bom ${indicePiorJogo}`)
}

const pontuacoes = "10 20 20 8 25 3 0 30 1"

analisarJogos(pontuacoes)