import { basename } from "path";

interface Defensivel {
    estaEliminado(): boolean;
    defenderAtaque(valorAtaque: number): void
}

class jaEliminadoException extends Error {
    constructor(mensagem: string) {
        super(mensagem)
    }
}

class Guerreiro implements Defensivel {
    constructor(
        private _id: number,
        private _descricao: string,
        private _forcaAtaque: number,
        private _life: number = 10
    ) {}

    estaEliminado(): boolean {
        return this._life <= 0
    }

    defenderAtaque(valorAtaque: number): void {
        this._life -= valorAtaque
    }

    atacar(defensivel: Defensivel): void {
        if (defensivel.estaEliminado()) {
            throw new jaEliminadoException(`Já eliminado`)
        }

        defensivel.defenderAtaque(this._forcaAtaque)
    }
}

class BaseMilitar implements Defensivel {
    constructor(
        private _id: number,
        private _x: number,
        private _y: number,
        private _percentualDeDano = 0
    ) {}

    estaEliminado(): boolean {
        return this._percentualDeDano >= 90
    }

    defenderAtaque(valorAtaque: number): void {
        this._percentualDeDano += valorAtaque
    }
}

enum ResultBatalha {
    EXERCITO1 = "Exercito 1",
    EXERCITO2 = "Exercito 2",
    EMPATE = "Empate"
}

type ResultBatalha2 = "Exercito 01" | "Exercito 02" | "Empate"

class CenarioDeBatalha {
    avaliar(exercito1: Defensivel[], exercito2: Defensivel[]) {
        let totalDaBatalha1: number = 0
        let totalDaBatalha2: number = 0

        for (let i = 0; i < exercito1.length; i++) {
            if (exercito1[i].estaEliminado()) {
                totalDaBatalha1++
            }
        }
        for (let i = 0; i < exercito2.length; i++) {
            if (exercito2[i].estaEliminado()) {
                totalDaBatalha2++
            }
        } 

        let vencedor: ResultBatalha;
        if (totalDaBatalha1 < totalDaBatalha2) {
            vencedor = ResultBatalha.EXERCITO1
        } else if (totalDaBatalha1 > totalDaBatalha2) {
            vencedor = ResultBatalha.EXERCITO2
        } else {
            vencedor = ResultBatalha.EMPATE
        }

        return vencedor
    }
}

export { Defensivel, Guerreiro, BaseMilitar, CenarioDeBatalha }
