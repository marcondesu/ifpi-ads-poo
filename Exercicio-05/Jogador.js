// questão 9
var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontos_atuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos_atuais = pontos_atuais;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.estaVivo = function () {
        if (this.pontos_atuais > 0) {
            return true;
        }
        return false;
    };
    Jogador.prototype.atacar = function (jogador) {
        if (jogador.estaVivo()) {
            jogador.pontos_atuais -= this.calcularAtaque();
        }
    };
    Jogador.prototype.toString = function () {
        return "For\u00E7a: ".concat(this.forca, "\nN\u00EDvel: ").concat(this.nivel, "\nPontos: ").concat(this.pontos_atuais, "\n");
    };
    return Jogador;
}());
var player_1 = new Jogador(10, 2, 100);
var player_2 = new Jogador(5, 3, 100);
console.log(player_1.calcularAtaque());
console.log(player_2.calcularAtaque());
player_1.atacar(player_2);
player_2.atacar(player_1);
console.log(player_1.toString());
console.log(player_2.toString());
