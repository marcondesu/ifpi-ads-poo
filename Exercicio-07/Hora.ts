class Hora {
    private _h: number // horas
    private _m: number // minutos
    private _s: number // segundos

    constructor(hora: number, minuto: number, segundo: number) {
        this._h = hora
        this._m = minuto
        this._s = segundo
    }

    lerHora(): number {
        return this._h
    }

    lerMinuto(): number {
        return this._m
    }

    lerSegundo(): number {
        return this._s
    }

    lerHorario(): string {
        return `${this._h}:${this._m}:${this._s}`
    }
}

let hora: Hora = new Hora(10, 57, 38)

console.log(`Hora: ${hora.lerHora()}`)
console.log(`Minuto: ${hora.lerMinuto()}`)
console.log(`Segundo: ${hora.lerSegundo()}`)
console.log(`Horário: ${hora.lerHorario()}`)
