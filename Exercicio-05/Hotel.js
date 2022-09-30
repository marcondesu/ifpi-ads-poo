var Hotel = /** @class */ (function () {
    function Hotel(quantReservas) {
        this.quantReservas = quantReservas;
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++;
    };
    return Hotel;
}());
var hotel = new Hotel(0);
console.log(hotel.quantReservas);
