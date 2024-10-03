function calculoTriangulo(a, b, c) {
    if (a === b && b === c) {
        console.log("Equilátero")
    } 
    else if (a === b || b === c || a === c){
        console.log("Isósceles")
    }
    else {
        console.log("Escaleno");
    }
}

calculoTriangulo(1, 1, 1)