"use strict";
/* import prompt from "prompt-sync";
import { Conta, Banco, Poupanca, ContaImposto } from "./banco";
import { AplicacaoError, ArquivoError } from "./excecoes";

let input = prompt();
let b: Banco = new Banco();

let opcao: String = '';

do {
    try {
        console.log('\nBem vindo\nDigite uma opção:');
        console.log('1 - Cadastrar       2 - Consultar saldo       3 - Sacar\n' +
            '4 - Depositar       5 - Excluir               6 - Transferir\n' +
            '7 - Render juros    8 - Listar contas         9 - Carregar arquivo de contas\n' +
            '0 - Sair\n');
        opcao = input("Opção:");
        switch (opcao) {
            case "1":
                inserir();
                break
            case "2":
                consultar();
                break
            case "3":
                sacar();
                break;
            case "4":
                depositar();
                break;
            case "5":
                excluir();
                break;
            case "6":
                transferir();
                break;
            case "7":
                renderJuros();
                break;
            case "8":
                listarContas();
                break;
            case "9":
                carregarDeArquivo();
                break;
        }


    } catch (e: any) {
        if (e instanceof AplicacaoError) {
            console.log(e.message);
        } else {
            console.log("Erro não esperado.");
        }
    }
    input('Operação finalizada. Pressione <enter>');
} while (opcao != "0");


console.log("Aplicação encerrada");


function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta:');
    let conta!: Conta;

    let op: string = input('Você deseja criar uma conta, poupança ou conta imposto? c/p/i').toLowerCase();
    if (op == 'c') {
        conta = new Conta(numero, 0);
    } else if (op == 'p') {
        conta = new Poupanca(numero, 0, 0.5);
    } else if (op == 'i') {
        conta = new ContaImposto(numero, 0, 0.38);
    }

    b.inserir(conta);
}

function consultar() {

    console.log("\nConsultar conta\n");
    let numero: string = input('Digite o número da conta:');
    let conta: Conta = b.consultar(numero);
    exibirConta(numero);
}

function sacar() {
    console.log("\nSacar\n");
    let numero: string = input('Digite o número da conta:');
    let valorStr: string = input('Digite o valor do saque:');
    let valor: number = parseFloat(valorStr);
    b.sacar(numero, valor);
    exibirConta(numero);
}
function depositar() {
    console.log("\nDepositar\n");
    let numero: string = input('Digite o número da conta:');
    let valorStr: string = input('Digite o valor do depósito:');
    let valor: number = parseFloat(valorStr);
    b.depositar(numero, valor);
    exibirConta(numero);
}

function excluir() {
    console.log("\nExcluir conta\n");
    let numero: string = input('Digite o número da conta:');
    b.excluir(numero);
}

function transferir() {
    console.log("\nTransferir\n");
    let numeroDebito: string = input('Digite o número da conta de origem:');
    let numeroCredito: string = input('Digite o número da conta de destino:');
    let valorStr: string = input('Digite o valor do depósito:');
    let valor: number = parseFloat(valorStr);
    b.transferir(numeroDebito, numeroCredito, valor);
    exibirConta(numeroDebito);
    exibirConta(numeroCredito);
}

function exibirConta(numero: string): void {
    console.log(`Número: ${b.consultar(numero).numero} - Saldo: ${b.consultar(numero).saldo}`);
}

function carregarDeArquivo() {
    try {
        let LineReaderSync = require("line-reader-sync");
        let lrs = new LineReaderSync("./contas.txt");
        console.log("Iniciando leitura de arquivo");
        while (true) {
            let linha: string = lrs.readline();
            if (linha != null) {
                let array: string[] = linha.split(";");
                let tipo: string = array[0];
                let numero: string = array[1];
                let saldo: number = parseFloat(array[2]);
                let conta!: Conta;
                if (tipo == 'C') {
                    conta = new Conta(numero, saldo);
                } else if (tipo == 'P') {
                    let taxaDeJuros: number = parseFloat(array[3]);
                    conta = new Poupanca(numero, saldo, taxaDeJuros);
                } else if (tipo == 'CI') {
                    let taxaDeDesconto: number = parseFloat(array[3]);
                    conta = new ContaImposto(numero, saldo, taxaDeDesconto);
                }
                b.inserir(conta);
                console.log('Conta lida: ' + conta.numero);
            } else {
                console.log("fim do arquivo")
                break;
            }

        }
    } catch (e: any) {
        throw new ArquivoError('Falha ao ler contas de arquivo.');
    }
}

function renderJuros() {
    console.log("\Render Juros\n");
    let numero: string = input('Digite o número da poupança:');
    b.renderJuros(numero);
    exibirConta(numero);
}

function listarContas() {
    console.log(b.listaContas());

}
*/
