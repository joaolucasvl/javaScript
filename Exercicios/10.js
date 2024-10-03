function validandoDivisao(a) {
    const number = a
    
    if (number % 3 === 0) {
        console.log(`O número ${number} é Divisivel por 3`);
    }
    else {
        console.log(`O número ${number} não é Divisivel por 3`);
    }
}

validandoDivisao(90)
validandoDivisao(15)
validandoDivisao(7)