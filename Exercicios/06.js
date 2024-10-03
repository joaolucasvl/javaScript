function sobreJurosSimples(a, b, c) {
    const juros = a * b * c
    const juros2 = juros.toFixed(2).replace('.', ',')
    console.log(`Regime de juros simples R$ ${juros2}`)
}

sobreJurosSimples(1200, 0.02, 15)


function sobreJurosCompostos(a, b, c) {
    const juros = a * Math.pow((1 + b), c)
    const juros2 = juros.toFixed(2).replace('.', ',')
    console.log(`Regime de juros simples R$ ${juros2}`)
}

sobreJurosCompostos(1200, 0.02, 15)