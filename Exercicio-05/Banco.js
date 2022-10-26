"use strict";
exports.__esModule = true;
exports.Banco = exports.Conta = exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this._nome = nome;
    }
    Pessoa.prototype.nome = function () {
        return this._nome;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var Conta = /** @class */ (function () {
    function Conta(numero, saldoInicial) {
        this._numero = numero;
        this._saldo = saldoInicial;
    }
    Conta.prototype.numero = function () {
        return this._numero;
    };
    Conta.prototype.saldo = function () {
        return this._saldo;
    };
    Conta.prototype.sacar = function (valor) {
        if (this._saldo - valor >= 0) {
            this._saldo = this._saldo - valor;
            return true;
        }
        return false;
    };
    Conta.prototype.depositar = function (valor) {
        this._saldo += valor;
    };
    return Conta;
}());
exports.Conta = Conta;
var Banco = /** @class */ (function () {
    function Banco() {
        this._contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        if (this.consultar(conta.numero()) == null) {
            this._contas.push(conta);
        }
    };
    Banco.prototype.consultar = function (numero) {
        var contaConsultada;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            if (conta.numero() == numero) {
                contaConsultada = conta;
                break;
            }
        }
        return contaConsultada;
    };
    Banco.prototype.sacar = function (numero, valor) {
        var contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    };
    Banco.prototype.transferir = function (numeroOrigem, numeroDestino, valor) {
        var contaOrigem = this.consultar(numeroOrigem);
        var contaDestino = this.consultar(numeroDestino);
        if (contaOrigem != null && contaDestino != null && contaOrigem.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    };
    Banco.prototype.consultarPorIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero() == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarPorIndice(conta.numero());
        if (indice != -1) {
            this._contas[indice] = conta;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.depositar(valor);
        }
    };
    Banco.prototype.quantidadeContas = function () {
        return this._contas.length;
    };
    Banco.prototype.totalSaldos = function () {
        var totalSaldo = 0;
        for (var _i = 0, _a = this._contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            totalSaldo += conta.saldo();
        }
        return totalSaldo;
    };
    Banco.prototype.mediaSaldos = function () {
        return this.totalSaldos() / this.quantidadeContas();
    };
    return Banco;
}());
exports.Banco = Banco;
