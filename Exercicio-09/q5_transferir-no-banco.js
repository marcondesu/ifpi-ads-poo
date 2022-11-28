"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Banco_1 = require("../Banco/Banco");
let banco = new Banco_1.Banco();
let conta_1 = new Banco_1.Conta('1', 100);
let conta_2 = new Banco_1.Conta('2', 150);
banco.inserir(conta_1);
banco.inserir(conta_2);
banco.transferir('1', '2', 110);
/* 5ª) Instancie uma classe banco e crie duas contas. Adicione-as à instancia do banco. Chame o método transferir
novamente passando um valor que lance a exceção na classe conta. Você considera que o lançamento da exceção
foi “propagado” para o método conta.transferir(), banco.transferir() e o método transferir do script app?
Como você avalia a confiabilidade dessa implementação.
    Sim, a exceção foi propagada. Numa interface gráfica seria um problema pois não permitiria ao usuário saber
    onde o erro ocorreu.
*/
