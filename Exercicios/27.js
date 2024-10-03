function criancaPequena(altura1, taxaCrescimento1, altura2, taxaCrescimento2) {
    // Verificar qual criança é menor iniciamente
    if(altura1 === altura2) {
        return "Ambas as crianças tem a mesma altura"
    }

    let menorAltura = altura1 < altura2 ? altura1 : altura2
    let maiorAltura = altura1 > altura2 ? altura1 : altura2
    let taxaMenor = altura1 < altura2 ? taxaCrescimento1 : taxaCrescimento2
    let taxaMaior = altura1 > altura2 ? taxaCrescimento1 : taxaCrescimento2

    // Verificar se a criança menor poderá ultrapassar a maior

    if (taxaMenor <= taxaMaior) {
        return "A criança menor não ultrapassará a maior."
    }

    let anos = 0
    while (menorAltura <= maiorAltura) {
        menorAltura += taxaMenor
        maiorAltura += taxaMaior
        anos++
    }

    return `A criança menor ultrapassará a maior em ${anos} anos.`
}

console.log(criancaPequena(120, 5, 130, 2));