"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenarioDeBatalha = exports.BaseMilitar = exports.Guerreiro = void 0;
class jaEliminadoException extends Error {
    constructor(mensagem) {
        super(mensagem);
    }
}
class Guerreiro {
    constructor(_id, _descricao, _forcaAtaque, _life = 10) {
        this._id = _id;
        this._descricao = _descricao;
        this._forcaAtaque = _forcaAtaque;
        this._life = _life;
    }
    estaEliminado() {
        return this._life <= 0;
    }
    defenderAtaque(valorAtaque) {
        this._life -= valorAtaque;
    }
    atacar(defensivel) {
        if (defensivel.estaEliminado()) {
            throw new jaEliminadoException(`Já eliminado`);
        }
        defensivel.defenderAtaque(this._forcaAtaque);
    }
}
exports.Guerreiro = Guerreiro;
class BaseMilitar {
    constructor(_id, _x, _y, _percentualDeDano = 0) {
        this._id = _id;
        this._x = _x;
        this._y = _y;
        this._percentualDeDano = _percentualDeDano;
    }
    estaEliminado() {
        return this._percentualDeDano >= 90;
    }
    defenderAtaque(valorAtaque) {
        this._percentualDeDano += valorAtaque;
    }
}
exports.BaseMilitar = BaseMilitar;
var ResultBatalha;
(function (ResultBatalha) {
    ResultBatalha["EXERCITO1"] = "Exercito 1";
    ResultBatalha["EXERCITO2"] = "Exercito 2";
    ResultBatalha["EMPATE"] = "Empate";
})(ResultBatalha || (ResultBatalha = {}));
class CenarioDeBatalha {
    avaliar(exercito1, exercito2) {
        let totalDaBatalha1 = 0;
        let totalDaBatalha2 = 0;
        for (let i = 0; i < exercito1.length; i++) {
            if (exercito1[i].estaEliminado()) {
                totalDaBatalha1++;
            }
        }
        for (let i = 0; i < exercito2.length; i++) {
            if (exercito2[i].estaEliminado()) {
                totalDaBatalha2++;
            }
        }
        let vencedor;
        if (totalDaBatalha1 < totalDaBatalha2) {
            vencedor = ResultBatalha.EXERCITO1;
        }
        else if (totalDaBatalha1 > totalDaBatalha2) {
            vencedor = ResultBatalha.EXERCITO2;
        }
        else {
            vencedor = ResultBatalha.EMPATE;
        }
        return vencedor;
    }
}
exports.CenarioDeBatalha = CenarioDeBatalha;
