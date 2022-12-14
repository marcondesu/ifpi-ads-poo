"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = void 0;
const PlataformaDeStreaming_1 = require("./PlataformaDeStreaming");
exports.input = require('prompt-sync')();
let plataforma = new PlataformaDeStreaming_1.PlataformaDeStreaming();
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
            excluir();
            break;
    }
    enterToContinue();
} while (opcao != '0');
function mostrarMenu() {
    let menu = '1 - Cadastrar\n';
    menu += '2 - Informação de conta\n';
    menu += '3 - Excluir\n';
    menu += '0 - Sair\n';
    console.log(menu);
}
function enterToContinue() {
    console.log();
    (0, exports.input)('<Enter> Para continuar...');
}
function obterConta() {
    const numero = (0, exports.input)('Número da conta: ');
    let conta;
    try {
        conta = plataforma.consultar(numero);
    }
    catch (e) {
        console.log("Operação inválida. Não existe uma conta com o número informado.");
    }
    return conta;
}
function obterTipoDeConta() {
    console.log('b - Conta básica');
    console.log('p - Conta padrão');
    console.log('pr - Conta premium\n');
    const tipo = (0, exports.input)('Tipo da conta: ').toLowerCase();
    if (tipo != 'b' && tipo != 'p' && tipo != 'pr') {
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
    if (tipo == 'b') {
        conta = new PlataformaDeStreaming_1.ContaBasica(numero);
    }
    else if (tipo == 'p') {
        conta = new PlataformaDeStreaming_1.ContaPadrao(numero);
    }
    else {
        conta = new PlataformaDeStreaming_1.ContaPremium(numero);
    }
    console.log('\nInserir usuários\n');
    let option = '';
    while (option != 'n') {
        let id = (0, exports.input)('Id: ');
        let nome = (0, exports.input)('Nome: ');
        let usuario = new PlataformaDeStreaming_1.Usuario(id, nome);
        try {
            conta.inserir(usuario);
        }
        catch (e) {
            console.log("A conta não suporta mais usuários.\n");
            break;
        }
        option = (0, exports.input)('Deseja inserir mais um usuário? (s/n): ');
    }
    plataforma.inserir(conta);
}
function consultar() {
    console.log('### Consultar conta ###\n');
    const conta = obterConta();
    if (conta != null) {
        console.log(`${conta.infoUsers()}`);
    }
}
function excluir() {
    console.log('### Excluir ###\n');
    const conta = obterConta();
    if (conta != null) {
        plataforma.excluir(conta.id);
        console.log('- Conta excluída com sucesso!');
    }
}
