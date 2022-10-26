"use strict";
// questão 7
class Equipamento {
    constructor() {
        this.ligado = false;
    }
    liga() {
        if (!this.ligado) { // se não estiver ligado, ligar
            this.ligado = true;
        }
    }
    desliga() {
        if (this.ligado) { // se estiver ligado, desligar
            this.ligado = false;
        }
    }
    inverte() {
        if (this.ligado) { // se estiver ligado, desligar
            this.desliga();
        }
        else { // se estiver desligado, ligar
            this.liga();
        }
    }
    estaLigado() {
        return this.ligado;
    }
}
let equip = new Equipamento();
console.log(`Está ligado? ${equip.estaLigado()}`);
equip.inverte();
console.log(`Está ligado? ${equip.estaLigado()}`);
equip.desliga();
console.log(`Está ligado? ${equip.estaLigado()}`);
equip.liga();
console.log(`Está ligado? ${equip.estaLigado()}`);
