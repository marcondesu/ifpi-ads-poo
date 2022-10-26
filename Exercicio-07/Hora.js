"use strict";
class Hora {
    constructor(hora, minuto, segundo) {
        this.h = hora;
        this.m = minuto;
        this.s = segundo;
    }
    lerHora() {
        return this.h;
    }
    lerMinuto() {
        return this.m;
    }
    lerSegundo() {
        return this.s;
    }
    lerHorario() {
        return `${this.h}:${this.m}:${this.s}`;
    }
}
let hora = new Hora(10, 57, 38);
console.log(`Hora: ${hora.lerHora()}`);
console.log(`Minuto: ${hora.lerMinuto()}`);
console.log(`Segundo: ${hora.lerSegundo()}`);
console.log(`Horário: ${hora.lerHorario()}`);
