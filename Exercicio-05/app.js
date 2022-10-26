"use strict";
exports.__esModule = true;
var input = require('prompt-sync')();
var Banco_1 = require("./Banco");
var banco = new Banco_1.Banco();
var opcao;
do {
    console.clear();
    mostrarMenu();
    opcao = input('> ');
    switch (opcao) {
        case '1':
            console.clear();
            inserir();
            enterToContinue();
            break;
        case '2':
            console.clear();
            consultar();
            enterToContinue();
            break;
        case '3':
            console.clear();
            sacar();
            enterToContinue();
            break;
        case '4':
            console.clear();
            depositar();
            enterToContinue();
            break;
        case '5':
            console.clear();
            excluir();
            enterToContinue();
            break;
        case '6':
            console.clear();
            transferir();
            enterToContinue();
            break;
        case '7':
            console.clear();
            totalizacoes();
            enterToContinue();
            break;
    }
} while (opcao != '0');
function mostrarMenu() {
    var menu = '1 - Cadastrar\n';
    menu += '2 - Consultar\n';
    menu += '3 - Sacar\n';
    menu += '4 - Depositar\n';
    menu += '5 - Excluir\n';
    menu += '6 - Transferir\n';
    menu += '7 - Totalizações\n';
    menu += '0 - Sair\n';
    console.log(menu);
}
function enterToContinue() {
    console.log();
    input('<Enter> Para continuar...');
}
function obterConta() {
    var numero = input('Número da conta: ');
    var conta = banco.consultar(numero);
    if (conta == null) {
        console.log('\n- Operação inválida. Não existe uma conta com o número informado.');
    }
    return conta;
}
function inserir() {
    console.log('### Cadastrar conta ###\n');
    var numero = input('Número da conta: ');
    var conta = new Banco_1.Conta(numero, 0);
    if (banco.consultar(numero) != null) {
        console.log('\n- Operação inválida. Não é possível inserir uma conta com um número existente.');
    }
    else {
        banco.inserir(conta);
        console.log('\n- Conta cadastrada com sucesso!');
    }
}
function consultar() {
    console.log('### Consultar conta ###\n');
    var conta = obterConta();
    if (conta != null) {
        console.log("\n- Saldo: R$".concat(conta.saldo().toFixed(2)));
    }
}
function sacar() {
    console.log('### Sacar ###\n');
    var conta = obterConta();
    if (conta != null) {
        var valor = Number(input('Valor: '));
        if (conta.sacar(valor)) {
            console.log('\n- Saque realizado com sucesso!');
        }
        else {
            console.log('\n- Operação inválida. Saldo insuficiente.');
        }
    }
}
function depositar() {
    console.log('### Depositar ###\n');
    var conta = obterConta();
    if (conta != null) {
        var valor = Number(input('Valor: '));
        conta.depositar(valor);
        console.log('\n- Depósito realizado com sucesso!');
    }
}
function excluir() {
    console.log('### Excluir ###\n');
    var conta = obterConta();
    if (conta != null) {
        banco.excluir(conta.numero());
        console.log('- Conta excluída com sucesso!');
    }
}
function transferir() {
    console.log('### Transferir ###\n');
    console.log('Conta de origem');
    var contaOrigem = obterConta();
    if (contaOrigem != null) {
        console.log('\nConta de destino');
        var contaDestino = obterConta();
        if (contaDestino != null) {
            console.log();
            var valor = Number(input('Valor: '));
            if (banco.transferir(contaOrigem.numero(), contaDestino.numero(), valor)) {
                console.log('\n- Transferência realizada com sucesso!');
            }
            else {
                console.log('\n- Falha! A conta de origem não possui saldo suficiente.');
            }
        }
    }
}
function totalizacoes() {
    console.log('### Transferir ###\n');
    console.log("Quantidade de contas: ".concat(banco.quantidadeContas()));
    console.log("Total de saldos nas contas: R$".concat(banco.totalSaldos().toFixed(2)));
    console.log("M\u00E9dia de saldo: R$".concat(banco.mediaSaldos().toFixed(2)));
}
/* class Tham {
    private _nome: string
    private _idade: number

    constructor(nome: string, idade: number) {
        this._nome = nome
        this._idade = idade
    }

    nome(): string {
        return this._nome
    }

    idade(): number {
        return this._idade
    }
}

let tham_michel: Tham = new Tham("Michel's Tham Ângela", 999999999999999)

console.log(tham_michel.nome, tham_michel.idade) */
