"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaldoInsuficienteError = exports.ContaInexistenteError = exports.AplicacaoError = void 0;
class AplicacaoError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.AplicacaoError = AplicacaoError;
class ContaInexistenteError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ContaInexistenteError = ContaInexistenteError;
class SaldoInsuficienteError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.SaldoInsuficienteError = SaldoInsuficienteError;
