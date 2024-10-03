function cardapioLanchonete(a, b) {
    switch (a) {
        case 600:
            valor = (b * 2.80).toFixed(2).replace('.', ',')
            console.log(`O valor é de: ${valor}`)
            break
        case 500:
            valor = (b * 3.50).toFixed(2).replace('.', ',')
            console.log(`O valor é de: ${valor}`)
            break
        case 400:
            valor = (b * 7.50).toFixed(2).replace('.', ',')
            console.log(`O valor é de: ${valor}`)
            break
        case 300:
            valor = (b * 5.50).toFixed(2).replace('.', ',')
            console.log(`O valor é de: ${valor}`)
            break
        case 200:
            valor =(b * 4.00).toFixed(2).replace('.', ',')
            console.log(`O valor é de: ${valor}`)
            break
        case 100:
            valor = (b * 3.00).toFixed(2).replace('.', ',')
            console.log(`O valor é de: ${valor}`)
             break
    }
}

cardapioLanchonete(600, 17)