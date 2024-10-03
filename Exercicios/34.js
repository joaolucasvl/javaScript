function caracteresIguais(str1, str2) {

    // Converte as strings para minúsculas e transforma em conjuntos (sets)
    const conjunto1 = new Set(str1.toLowerCase());
    const conjunto2 = new Set(str2.toLowerCase());

    // Verifica se todos os caracteres de conjunto1 estão em conjunto2
    for (let i = 0; i < conjunto1.size; i++) {
        const char = Array.from(conjunto1)[i]
        if(!conjunto1.has(char)) {
            return false
        }
    }


    return true
}

console.log(caracteresIguais("abcde", "edcba"))
console.log(caracteresIguais("Hello", "Olelh"))
console.log(caracteresIguais("Test", "Best"))