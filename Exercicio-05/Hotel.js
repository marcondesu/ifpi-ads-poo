"use strict";
// questão 2
class Hotel {
    constructor(quantReservas) {
        this.quantReservas = quantReservas;
    }
    adicionarReserva() {
        this.quantReservas++;
    }
}
let hotel = new Hotel(0);
console.log(hotel.quantReservas);
