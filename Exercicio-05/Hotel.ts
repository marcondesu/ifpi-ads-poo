// questão 2

class Hotel {
    quantReservas: number;

    constructor(quantReservas: number) {
        this.quantReservas = quantReservas
    }

    adicionarReserva(): void {
        this.quantReservas++;
    }
}

let hotel = new Hotel(0);
console.log(hotel.quantReservas)
