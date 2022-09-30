// questão 7
var Equipamento = /** @class */ (function () {
    function Equipamento() {
        this.ligado = false;
    }
    Equipamento.prototype.liga = function () {
        if (!this.ligado) { // se não estiver ligado, ligar
            this.ligado = true;
        }
    };
    Equipamento.prototype.desliga = function () {
        if (this.ligado) { // se estiver ligado, desligar
            this.ligado = false;
        }
    };
    Equipamento.prototype.inverte = function () {
        if (this.ligado) { // se estiver ligado, desligar
            this.desliga();
        }
        else { // se estiver desligado, ligar
            this.liga();
        }
    };
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
var equip = new Equipamento();
console.log("Est\u00E1 ligado? ".concat(equip.estaLigado()));
equip.inverte();
console.log("Est\u00E1 ligado? ".concat(equip.estaLigado()));
equip.desliga();
console.log("Est\u00E1 ligado? ".concat(equip.estaLigado()));
equip.liga();
console.log("Est\u00E1 ligado? ".concat(equip.estaLigado()));
