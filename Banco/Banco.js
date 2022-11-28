"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = exports.ContaImposto = exports.Poupanca = exports.Conta = exports.Pessoa = void 0;
class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }
    nome() {
        return this._nome;
    }
}
exports.Pessoa = Pessoa;
class Conta {
    constructor(numero, saldoInicial) {
        this._numero = numero;
        if (saldoInicial < 0) {
            throw new Error();
        }
        this._saldo = saldoInicial;
    }
    numero() {
        return this._numero;
    }
    saldo() {
        return this._saldo;
    }
    sacar(valor) {
        if (this._saldo - valor < 0 || valor < 0) {
            throw new Error();
        }
        this._saldo = this._saldo - valor;
    }
    depositar(valor) {
        if (valor < 0) {
            throw new Error();
        }
        this._saldo += valor;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
exports.Conta = Conta;
class Poupanca extends Conta {
    constructor(numero, saldoInicial, taxaDeJuros) {
        super(numero, saldoInicial);
        this._taxaJuros = taxaDeJuros;
    }
    taxaJuros() {
        return this._taxaJuros;
    }
    renderJuros() {
        this.depositar(this.saldo() * this.taxaJuros() / 100);
    }
}
exports.Poupanca = Poupanca;
class ContaImposto extends Conta {
    constructor(numero, saldoInicial, taxaDeDesconto) {
        super(numero, saldoInicial);
        this._taxaDesconto = taxaDeDesconto;
    }
    sacar(valor) {
        super.sacar(valor + valor * this._taxaDesconto / 100);
    }
}
exports.ContaImposto = ContaImposto;
class Banco {
    constructor() {
        this._contas = [];
    }
    inserir(conta) {
        if (this.consultar(conta.numero()) == null) {
            this._contas.push(conta);
        }
    }
    consultar(numero) {
        let contaConsultada;
        for (let conta of this._contas) {
            if (conta.numero() == numero) {
                contaConsultada = conta;
                break;
            }
        }
        return contaConsultada;
    }
    sacar(numero, valor) {
        let contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    }
    transferir(numeroOrigem, numeroDestino, valor) {
        const contaOrigem = this.consultar(numeroOrigem);
        const contaDestino = this.consultar(numeroDestino);
        if (contaOrigem != null && contaDestino != null) {
            contaOrigem.sacar(valor);
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
    consultarPorIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero() == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterar(conta) {
        let indice = this.consultarPorIndice(conta.numero());
        if (indice != -1) {
            this._contas[indice] = conta;
        }
    }
    excluir(numero) {
        let indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            for (let i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }
    depositar(numero, valor) {
        let contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.depositar(valor);
        }
    }
    renderJuros(numero) {
    }
    quantidadeContas() {
        return this._contas.length;
    }
    totalSaldos() {
        let totalSaldo = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo();
        }
        return totalSaldo;
    }
    mediaSaldos() {
        return this.totalSaldos() / this.quantidadeContas();
    }
}
exports.Banco = Banco;
