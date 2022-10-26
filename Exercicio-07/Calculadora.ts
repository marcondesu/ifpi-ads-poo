class Calculadora {
    private _operando1: number
    private _operando2: number

    constructor(operando_1: number, operando_2: number) {
        this._operando1 = operando_1
        this._operando2 = operando_2
    }

    soma(): number {
        return this._operando1 + this._operando2
    }
    
    subtrai(): number {
        return this._operando1 - this._operando2
    }
}

let calc: Calculadora = new Calculadora(1, 2);

console.log(`Soma: ${calc.soma()}`)
console.log(`Subtração: ${calc.subtrai()}`)

// console.log(`_operando1: ${calc._operando1}`) erro (atributo privado)
