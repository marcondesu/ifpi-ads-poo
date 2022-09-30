// questão 7

class Equipamento {
    ligado: boolean = false

    liga(): void {
        if (!this.ligado) { // se não estiver ligado, ligar
            this.ligado = true
        }
    }

    desliga(): void {
        if (this.ligado) { // se estiver ligado, desligar
            this.ligado = false
        }
    }

    inverte(): void {
        if (this.ligado) { // se estiver ligado, desligar
            this.desliga()
        } else { // se estiver desligado, ligar
            this.liga()
        }
    }

    estaLigado(): boolean {
        return this.ligado
    }
}

let equip: Equipamento = new Equipamento()

console.log(`Está ligado? ${equip.estaLigado()}`)

equip.inverte()
console.log(`Está ligado? ${equip.estaLigado()}`)

equip.desliga()
console.log(`Está ligado? ${equip.estaLigado()}`)

equip.liga()
console.log(`Está ligado? ${equip.estaLigado()}`)
