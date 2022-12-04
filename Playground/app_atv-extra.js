"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atv_extra_1 = require("./atv-extra");
// exercito 1
let guerreiro1 = new atv_extra_1.Guerreiro(1, "Soldado", 10);
let guerreiro2 = new atv_extra_1.Guerreiro(2, "Marinheiro", 10);
let baseMilitar1 = new atv_extra_1.BaseMilitar(1, 100, 100);
let exercito01 = [guerreiro1, guerreiro2, baseMilitar1];
// exercito 2
let guerreiro3 = new atv_extra_1.Guerreiro(1, "Soldado", 10);
let guerreiro4 = new atv_extra_1.Guerreiro(2, "Marinheiro", 10);
let baseMilitar2 = new atv_extra_1.BaseMilitar(1, 100, 100);
let exercito02 = [guerreiro3, guerreiro4, baseMilitar2];
try {
    // guerreiro1.atacar(guerreiro3)
    // guerreiro1.atacar(guerreiro3)
}
catch (e) {
    console.log(e.message);
}
let cenario = new atv_extra_1.CenarioDeBatalha();
console.log(cenario.avaliar(exercito01, exercito02));
