import { Guerreiro, BaseMilitar, CenarioDeBatalha, Defensivel } from "./atv-extra"

// exercito 1
let guerreiro1: Guerreiro = new Guerreiro(1, "Soldado", 10)
let guerreiro2: Guerreiro = new Guerreiro(2, "Marinheiro", 10)
let baseMilitar1: BaseMilitar = new BaseMilitar(1, 100, 100)

let exercito01: Defensivel[] = [guerreiro1, guerreiro2, baseMilitar1]

// exercito 2
let guerreiro3: Guerreiro = new Guerreiro(1, "Soldado", 10)
let guerreiro4: Guerreiro = new Guerreiro(2, "Marinheiro", 10)
let baseMilitar2: BaseMilitar = new BaseMilitar(1, 100, 100)

let exercito02: Defensivel[] = [guerreiro3, guerreiro4, baseMilitar2]

try {
    // guerreiro1.atacar(guerreiro3)
    // guerreiro1.atacar(guerreiro3)
} catch (e: any) {
    console.log(e.message)
}

let cenario: CenarioDeBatalha = new CenarioDeBatalha()

console.log(cenario.avaliar(exercito01, exercito02))
