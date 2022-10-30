var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veiculo = /** @class */ (function () {
    function Veiculo(placa, ano) {
        this.placa = placa;
        this.ano = ano;
    }
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(placa, ano, modelo) {
        var _this = _super.call(this, placa, ano) || this;
        _this.modelo = modelo;
        return _this;
    }
    return Carro;
}(Veiculo));
var CarroEletrico = /** @class */ (function (_super) {
    __extends(CarroEletrico, _super);
    function CarroEletrico(placa, ano, modelo, autonomiaBateria) {
        var _this = _super.call(this, placa, ano, modelo) || this;
        _this.autonomiaBateria = autonomiaBateria;
        return _this;
    }
    return CarroEletrico;
}(Carro));
