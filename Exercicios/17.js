function calcularSalario(a, b) {
    switch (b) {
        case "A":
            aumento = a * 0.1
            console.log(aumento + a)
            break
        case "B":
            aumento = a * 0.15
            console.log(aumento + a)
            break
        case "C":
            aumento = a * 0.2
            console.log(aumento + a)
            break
    }
}

calcularSalario(1000, "A")
calcularSalario(1000, "B")
calcularSalario(1000, "C")