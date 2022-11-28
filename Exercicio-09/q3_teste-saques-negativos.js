"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Banco_1 = require("../Banco/Banco");
let conta_1 = new Banco_1.Conta('1', 100);
conta_1.sacar(150);
// Exceção lançada devido ao saque que deixaria saldo negativo
