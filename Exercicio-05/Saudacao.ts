// questão 5

class Saudacao {
    texto: string
    destinatario: string

    constructor(texto: string, destinatario: string) {
        this.texto = texto
        this.destinatario = destinatario
    }

    obterSaudacao(): string {
        return `${this.texto}, ${this.destinatario}`
    }
}

let greet: Saudacao = new Saudacao("Bom dia", "Marcos");
console.log(greet.obterSaudacao());
