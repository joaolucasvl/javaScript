function calcularBhaskara(a, b, c) {
    const D = b * b - 4 * a * c

    if (D > 0) {
        const positiva = (-b + Math.sqrt(D)) / (2 * a)
        const negativa = (-b - Math.sqrt(D)) / (2 * a)
        console.log(`As raizes da equação são ${positiva} e ${negativa}.`)
    }
    else {
        console.log(`A raiz é negativa ${D}.`)
    }
}

calcularBhaskara(2, -16, -18)