"use strict";
// questão 9
class Jogador {
    constructor(forca, nivel, pontos_atuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos_atuais = pontos_atuais;
    }
    calcularAtaque() {
        return this.forca * this.nivel;
    }
    estaVivo() {
        if (this.pontos_atuais > 0) {
            return true;
        }
        return false;
    }
    atacar(jogador) {
        if (jogador.estaVivo()) {
            jogador.pontos_atuais -= this.calcularAtaque();
        }
    }
    toString() {
        return `Força: ${this.forca}\nNível: ${this.nivel}\nPontos: ${this.pontos_atuais}\n`;
    }
}
let player_1 = new Jogador(10, 2, 100);
let player_2 = new Jogador(5, 3, 100);
console.log(player_1.calcularAtaque());
console.log(player_2.calcularAtaque());
player_1.atacar(player_2);
player_2.atacar(player_1);
console.log(player_1.toString());
console.log(player_2.toString());
