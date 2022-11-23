"use strict";
class Calculadoraa {
    constructor(operando_1, operando_2) {
        this._operando1 = operando_1;
        this._operando2 = operando_2;
    }
    soma() {
        return this._operando1 + this._operando2;
    }
    operando1() {
        return this._operando1;
    }
    operando2() {
        return this._operando2;
    }
}
let calculadora = new Calculadoraa(2, 5);
console.log(`Soma = ${calculadora.soma()}`);
class CalculadoraCientifica extends Calculadoraa {
    exponenciar() {
        return this.operando1() ** this.operando2();
    }
}
let calcCientifica = new CalculadoraCientifica(5, 2);
console.log(`Exponenciar = ${calcCientifica.exponenciar()}`);
// Foi necessário a implementação dos métodos de retorno para acessar os atributos privados da classe Calculadoraa
