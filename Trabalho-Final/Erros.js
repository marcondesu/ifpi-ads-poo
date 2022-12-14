"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaInexistenteError = exports.UsuarioNaoEncontradoError = exports.ContaJaInseridaError = exports.LimiteDeUsuariosError = void 0;
class LimiteDeUsuariosError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.LimiteDeUsuariosError = LimiteDeUsuariosError;
class ContaJaInseridaError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ContaJaInseridaError = ContaJaInseridaError;
class UsuarioNaoEncontradoError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.UsuarioNaoEncontradoError = UsuarioNaoEncontradoError;
class ContaInexistenteError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ContaInexistenteError = ContaInexistenteError;
