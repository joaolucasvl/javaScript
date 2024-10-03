function calcularNotas(valor) {
    let cedulas = [100, 50, 10, 5, 1]
    let resultado = []

    for (let i = 0; i < cedulas.length; i++) {
        let qtdNotas = Math.floor(valor / cedulas[i])
        if (qtdNotas > 0) {
            resultado.push(`${qtdNotas} notas de R$ ${cedulas[i]}`)
            valor %= cedulas[i]
        }
    }

    return resultado.join('. ')
}



console.log(calcularNotas(18));