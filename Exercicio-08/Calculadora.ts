class Calculadoraa {
    private _operando1: number
    private _operando2: number

    constructor(operando_1: number, operando_2: number) {
        this._operando1 = operando_1
        this._operando2 = operando_2
    }

    soma(): number {
        return this._operando1 + this._operando2
    }

    operando1(): number {
        return this._operando1
    }
    
    operando2(): number {
        return this._operando2
    }
}

let calculadora: Calculadoraa = new Calculadoraa(2, 5)
console.log(`Soma = ${calculadora.soma()}`)

class CalculadoraCientifica extends Calculadoraa {
    exponenciar(): number {
        return this.operando1() ** this.operando2()
    }
}

let calcCientifica: CalculadoraCientifica = new CalculadoraCientifica(5, 2)
console.log(`Exponenciar = ${calcCientifica.exponenciar()}`)

// Foi necessário a implementação dos métodos de retorno para acessar os atributos privados da classe Calculadoraa
