"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
exports.input = require('prompt-sync')();
const Banco_1 = require("./Banco");
let banco = new Banco_1.Banco();
let opcao;
do {
    console.clear();
    mostrarMenu();
    opcao = (0, exports.input)('> ');
    console.clear();
    switch (opcao) {
        case '1':
            inserir();
            break;
        case '2':
            consultar();
            break;
        case '3':
            sacar();
            break;
        case '4':
            depositar();
            break;
        case '5':
            excluir();
            break;
        case '6':
            transferir();
            break;
        case '7':
            totalizacoes();
            break;
        case '8':
            renderJuros();
    }
    enterToContinue();
} while (opcao != '0');
function mostrarMenu() {
    let menu = '1 - Cadastrar\n';
    menu += '2 - Consultar\n';
    menu += '3 - Sacar\n';
    menu += '4 - Depositar\n';
    menu += '5 - Excluir\n';
    menu += '6 - Transferir\n';
    menu += '7 - Totalizações\n';
    menu += '8 - Render juros\n';
    menu += '0 - Sair\n';
    console.log(menu);
}
function enterToContinue() {
    console.log();
    (0, exports.input)('<Enter> Para continuar...');
}
function obterConta() {
    const numero = (0, exports.input)('Número da conta: ');
    const conta = banco.consultar(numero);
    if (conta == null) {
        console.log('\n- Operação inválida. Não existe uma conta com o número informado.');
    }
    return conta;
}
function obterTipoDeConta() {
    console.log('c - Conta comum');
    console.log('p - Conta poupança');
    console.log('i - Conta imposto\n');
    const tipo = (0, exports.input)('Tipo da conta: ').toLowerCase();
    if (tipo != 'c' && tipo != 'p' && tipo != 'i') {
        console.log('\n- Operação inválida! Selecione um dos tipos de conta acima.\n');
        return obterTipoDeConta();
    }
    return tipo;
}
function inserir() {
    console.log('### Cadastrar conta ###\n');
    const tipo = obterTipoDeConta();
    let numero = (0, exports.input)('Número da conta: ');
    let conta;
    if (tipo == 'c') {
        conta = new Banco_1.Conta(numero, 0);
    }
    else if (tipo == 'p') {
        conta = new Banco_1.Poupanca(numero, 0, 0.5);
    }
    else {
        conta = new Banco_1.ContaImposto(numero, 0, 0.38);
    }
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
    const conta = obterConta();
    if (conta != null) {
        console.log(`\n- Saldo: R$${conta.saldo().toFixed(2)}`);
    }
}
function sacar() {
    console.log('### Sacar ###\n');
    const conta = obterConta();
    if (conta != null) {
        const valor = Number((0, exports.input)('Valor: '));
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
    const conta = obterConta();
    if (conta != null) {
        const valor = Number((0, exports.input)('Valor: '));
        conta.depositar(valor);
        console.log('\n- Depósito realizado com sucesso!');
    }
}
function excluir() {
    console.log('### Excluir ###\n');
    const conta = obterConta();
    if (conta != null) {
        banco.excluir(conta.numero());
        console.log('- Conta excluída com sucesso!');
    }
}
function transferir() {
    console.log('### Transferir ###\n');
    console.log('Conta de origem');
    const contaOrigem = obterConta();
    if (contaOrigem != null) {
        console.log('\nConta de destino');
        const contaDestino = obterConta();
        if (contaDestino != null) {
            console.log();
            const valor = Number((0, exports.input)('Valor: '));
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
    console.log(`Quantidade de contas: ${banco.quantidadeContas()}`);
    console.log(`Total de saldos nas contas: R$${banco.totalSaldos().toFixed(2)}`);
    console.log(`Média de saldo: R$${banco.mediaSaldos().toFixed(2)}`);
}
function renderJuros() {
    const conta = obterConta();
    if (conta instanceof Banco_1.Poupanca) {
        conta.renderJuros();
        console.log('\n- Juros rendendo...');
    }
}
