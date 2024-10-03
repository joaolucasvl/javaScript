// Antes
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}


const p1 = new Pessoa('João')
p1.falar()




// Depois
function Pessoa(nome) {
    this.nome = nome


    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}


const p2 = new Pessoa('João')
p1.falar()