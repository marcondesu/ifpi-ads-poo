"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Banco_1 = require("./Banco");
let conta1 = new Banco_1.Conta('1', 100);
let conta2 = new Banco_1.Conta('2', 200);
let banco = new Banco_1.Banco();
banco.inserir(conta1);
banco.inserir(conta2);
// console.log(banco.totalSaldos())
// banco.consultar('2')
