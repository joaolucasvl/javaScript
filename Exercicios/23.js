function calcularMediaPonderada(cod, n1, n2 , n3) {
    
        let nota = [n1, n2, n3]
        let peso = [4, 3, 3]

        let somaNota = 0
        let somaPeso = 0
        let i = 0 // Inicializa o índice para o loop

        // Usando while para iterar pelos arrays
        while (i < nota.length) {
            somaNota += nota[i] * peso[i]
            somaPeso += peso[i]
            i++
        }

        // Calcular a média ponderada

        let mediaPonderada = somaNota / somaPeso
        
        // Verificar aprovação 

        if (mediaPonderada < 5) {
            console.log(`O aluno ${cod}, tirou as seguintes notas: ${n1}, ${n2}, ${n3}. E a média foi de: ${mediaPonderada.toFixed(1)}. O aluno foi REPROVADO.`)
        } else {
            console.log(`O aluno ${cod}, tirou as seguintes notas: ${n1}, ${n2}, ${n3}. E a média foi de: ${mediaPonderada.toFixed(1)}. O aluno foi APROVADO.`)
        }
}

calcularMediaPonderada(206, 7, 8, 6)
