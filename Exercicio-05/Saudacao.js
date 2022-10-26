"use strict";
// questão 5
class Saudacao {
    constructor(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    obterSaudacao() {
        return `${this.texto}, ${this.destinatario}`;
    }
}
let greet = new Saudacao("Bom dia", "Marcos");
console.log(greet.obterSaudacao());
