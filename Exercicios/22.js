function calcularAnuidade(mes, valor) {
    switch (mes) {
        case 12:
            juros = valor * 0.55
            total = (juros + valor).toFixed(2).replace('.', ',')
            console.log(`A anuidade foi paga em dezembro. O Valor a ser pago é de ${total}`)
            break
        case 11:
            juros = valor * 0.50
            total = (juros + valor).toFixed(2).replace('.', ',')
            console.log(`A anuidade foi paga em novembro. O Valor a ser pago é de ${total}`)
            break
        case 10:
            juros = valor * 0.45
            total = (juros + valor).toFixed(2).replace('.', ',')
            console.log(`A anuidade foi paga em outubro. O Valor a ser pago é de ${total}`)
            break
        case 9:
            juros = valor * 0.40
            total = (juros + valor).toFixed(2).replace('.', ',')
            console.log(`A anuidade foi paga em setembro. O Valor a ser pago é de ${total}`)
            break
        case 8:
            juros = valor * 0.35
            total = (juros + valor).toFixed(2).replace('.', ',')
            console.log(`A anuidade foi paga em agosto. O Valor a ser pago é de ${total}`)
            break
        case 7:
            juros = valor * 0.30
            total = (juros + valor).toFixed(2).replace('.', ',')
            console.log(`A anuidade foi paga em julho. O Valor a ser pago é de ${total}`)
            break
        case 6:
            juros = valor * 0.25
            total = (juros + valor).toFixed(2).replace('.', ',')
            console.log(`A anuidade foi paga em junho. O Valor a ser pago é de ${total}`)
            break
        case 5:
            juros = valor * 0.20
            total = (juros + valor).toFixed(2).replace('.', ',')
            console.log(`A anuidade foi paga em maio. O Valor a ser pago é de ${total}`)
            break
        case 4:
            juros = valor * 0.15
            total = (juros + valor).toFixed(2).replace('.', ',')
            console.log(`A anuidade foi paga em abril. O Valor a ser pago é de ${valor}`)
            break
        case 3:
            juros = valor * 0.10
            total = (juros + valor).toFixed(2).replace('.', ',')
            console.log(`A anuidade foi paga em março. O Valor a ser pago é de ${total}`)
            break
        case 2:
            juros = valor * 0.05
            total = (juros + valor).toFixed(2).replace('.', ',')
            console.log(`A anuidade foi paga em fevereiro. O Valor a ser pago é de ${total}`)
            break
        case 1:
            juros = valor * 0
            total = (juros + valor).toFixed(2).replace('.', ',')
            console.log(`A anuidade foi paga em janeiro. O Valor a ser pago é de ${total}`)
            break
        default:
            console.log("Valor inválido.")

    }
}

calcularAnuidade(2, 1000)
calcularAnuidade(6, 1000)
calcularAnuidade(12, 1000)