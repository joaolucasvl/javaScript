function barracaDeFruta(fruta) {
    switch (fruta) {
        case "Maçã":
            console.log("Não vendemos esta fruta aqui")
            break
        case "Kiwi":
            console.log("Estamos com escassez de kiwis")
            break
        case "Melancia":
            console.log("Aqui está, são 3 reais o quilo")
            break
        default:
            console.log("Fruta não encontrada")
            break
    }
}

barracaDeFruta("Maçã")
barracaDeFruta("Kiwi")
barracaDeFruta("Melancia")
