function calculadora(a, b, c) {
    switch(b) {
        case "+":
            soma = a + c
            console.log(soma)
            break
        case "-":
            sub = a - c
            console.log(sub)
            break
        case "*":
            mult = a * c
            console.log(mult)
            break
        case "/":
            div = a / c
            console.log(div)
            break
        default:
            console.log("Operação invalida")
    }
}

calculadora(2, "+", 5)
calculadora(2, "-", 5)
calculadora(2, "*", 5)
calculadora(2, "/", 5)
