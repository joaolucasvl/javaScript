function diaUtil(dia) {
    switch (dia) {
        case 7:
            console.log(`Sábado, fim de semana`)
            break
        case 6:
            console.log(`Sexta, Dia Util`)
            break
        case 5:
            console.log(`Quinta, Dia Util`)
            break
        case 4:
            console.log(`Quarta, Dia Util`)
            break
        case 3:
            console.log(`Terça, Dia Util`)
            break
        case 2:
            console.log(`Segunda, Dia Util`)
            break
        case 1:
            console.log(`Domingo, fim de semana`)
            break
        default: 
            console.log(`Dia Invalido`)
            break
    }
}


diaUtil(6)