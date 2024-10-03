function teste1(num) {
    if(num > 7)
        console.log(num) // Apenas esse console.log está associado ao IF
        
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // Cuidado com " ; ", não usar com as estruturas de controle
        console.log(num) 
    }
        

}

teste1(6)
teste1(8)