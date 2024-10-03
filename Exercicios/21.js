function valorDoConvenio(idade) {
    taxa = 100
    if (idade < 10) {
        adicional = (taxa + 80).toFixed(2).replace('.', ',')
        console.log(`O valor de um convenio para uma pessoa de ${idade} é de ${adicional}`);
    }
    else if (idade > 10 && idade < 30) {
        adicional = (taxa + 50).toFixed(2).replace('.', ',')
        console.log(`O valor de um convenio para uma pessoa de ${idade} é de ${adicional}`);
    }
    else if (idade > 30 && idade < 60) {
        adicional = (taxa + 95).toFixed(2).replace('.', ',')
        console.log(`O valor de um convenio para uma pessoa de ${idade} é de ${adicional}`);
    }
    else if (idade >= 60) {
        adicional = (taxa + 130).toFixed(2).replace('.', ',')
        console.log(`O valor de um convenio para uma pessoa de ${idade} é de ${adicional}`);
    }
}

valorDoConvenio(60)
valorDoConvenio(34)
valorDoConvenio(22)