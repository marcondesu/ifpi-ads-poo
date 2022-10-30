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
var Calculadoraa = /** @class */ (function () {
    function Calculadoraa(operando_1, operando_2) {
        this._operando1 = operando_1;
        this._operando2 = operando_2;
    }
    Calculadoraa.prototype.soma = function () {
        return this._operando1 + this._operando2;
    };
    Calculadoraa.prototype.operando1 = function () {
        return this._operando1;
    };
    Calculadoraa.prototype.operando2 = function () {
        return this._operando2;
    };
    return Calculadoraa;
}());
var calculadora = new Calculadoraa(2, 5);
console.log("Soma = ".concat(calculadora.soma()));
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    function CalculadoraCientifica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculadoraCientifica.prototype.exponenciar = function () {
        return Math.pow(this.operando1(), this.operando2());
    };
    return CalculadoraCientifica;
}(Calculadoraa));
var calcCientifica = new CalculadoraCientifica(5, 2);
console.log("Exponenciar = ".concat(calcCientifica.exponenciar()));
