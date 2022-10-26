"use strict";
class Calculadora {
    constructor(operando_1, operando_2) {
        this.op_1 = operando_1;
        this.op_2 = operando_2;
    }
    soma() {
        return this.op_1 + this.op_2;
    }
    subtrai() {
        return this.op_1 - this.op_2;
    }
}
let calc = new Calculadora(1, 2);
console.log(`Soma: ${calc.soma()}`);
console.log(`Subtração: ${calc.subtrai()}`);
// console.log(`op_1: ${calc.op_1}`) erro (atributo privado)
