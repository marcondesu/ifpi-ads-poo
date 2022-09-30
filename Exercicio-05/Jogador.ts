// questão 9

class Jogador {
    forca: number
    nivel: number
    pontos_atuais: number

    constructor(forca: number, nivel: number, pontos_atuais: number) {
        this.forca = forca
        this.nivel = nivel
        this.pontos_atuais = pontos_atuais
    }

    calcularAtaque(): number {
        return this.forca * this.nivel
    }

    estaVivo(): boolean {
        if (this.pontos_atuais > 0) {
            return true
        }

        return false
    }

    atacar(jogador: Jogador): void {
        if (jogador.estaVivo()) {
            jogador.pontos_atuais -= this.calcularAtaque()
        }
    }

    toString(): string {
        return `Força: ${this.forca}\nNível: ${this.nivel}\nPontos: ${this.pontos_atuais}\n`
    }
}

let player_1: Jogador = new Jogador(10, 2, 100)
let player_2: Jogador = new Jogador(5, 3, 100)

console.log(player_1.calcularAtaque())
console.log(player_2.calcularAtaque())

player_1.atacar(player_2)
player_2.atacar(player_1)

console.log(player_1.toString())
console.log(player_2.toString())
