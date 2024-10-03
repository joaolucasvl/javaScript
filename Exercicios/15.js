function compraCarro(modelo) {
    switch (modelo) {
        case "Hatch":
            console.log("Compra efetuada com sucesso")
            break
        case "Sendan":
            console.log("Tem certeza que não prefere este modelo?")
            break
        case "Caminhonete":
            console.log("Tem certeza que não prefere este modelo?")
            break
        case "Moto":
            console.log("Tem certeza que não prefere este modelo?")
            break
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui")
            break
    }
}

compraCarro("Hatch")
