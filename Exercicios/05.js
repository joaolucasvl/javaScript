function arredondar(a) {
    const valor = a.toFixed(2).replace('.', ',')
    console.log(`O valor em reais é de: R$ ${valor}`)
}

arredondar(0.30000000000000004)