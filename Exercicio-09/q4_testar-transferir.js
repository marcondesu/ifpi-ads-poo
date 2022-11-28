"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Banco_1 = require("../Banco/Banco");
let conta_1 = new Banco_1.Conta('1', 100);
let conta_2 = new Banco_1.Conta('2', 150);
conta_1.transferir(conta_2, 110);
/* Explicação: o método transferir inicialmente saca o valor da transferência da conta debitada,
caso o valor do saque for maior que o saldo da conta, uma exceção é lançada. */
