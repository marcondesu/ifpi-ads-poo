export class Pessoa {
	private _nome: string

	constructor(nome: string) {
		this._nome = nome
	}

	nome() {
		return this._nome
	}
}

export class Conta {
	private _numero: string;
	private _saldo: number;

    constructor(numero: string, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}
	
	numero(): string {
		return this._numero;
        
	}

	saldo(): number {
		return this._saldo;
	}

	sacar(valor: number): boolean {
		if (this._saldo - valor >= 0) {
			this._saldo = this._saldo - valor;

			return true
		}

		return false
	}

	depositar(valor: number): void {
		this._saldo += valor;
	}
}

export class Poupanca extends Conta {
	private _taxaJuros: number

	constructor(numero: string, saldoInicial: number, taxaDeJuros: number) {
		super(numero, saldoInicial)
		this._taxaJuros = taxaDeJuros
	}

	taxaJuros(): number {
		return this._taxaJuros
	}

	renderJuros(): void {
		this.depositar(this.saldo() * this.taxaJuros() / 100)
	}
}

export class ContaImposto extends Conta {
	private _taxaDesconto: number

	constructor(numero: string, saldoInicial: number, taxaDeDesconto: number) {
		super(numero, saldoInicial)
		this._taxaDesconto = taxaDeDesconto
	}

	sacar(valor: number): boolean {
		if (super.sacar(valor + valor * this._taxaDesconto / 100)) {
			return true
		}

		return false
	}
}

export class Banco {
	private _contas: Conta[] = [];
	
	inserir(conta: Conta): void {
        if (this.consultar(conta.numero()) == null) {
		    this._contas.push(conta);
        }
	}

	consultar(numero: string): Conta {
		let contaConsultada!: Conta;

		for (let conta of this._contas) {
			if (conta.numero() == numero) {
				contaConsultada = conta;
				break;
			}
		}

		return contaConsultada;
	}

	sacar(numero: string, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.sacar(valor);
		}
	}

	transferir(numeroOrigem: string, numeroDestino: string, valor: number): boolean {
		const contaOrigem: Conta = this.consultar(numeroOrigem);
		const contaDestino: Conta = this.consultar(numeroDestino);

		if (contaOrigem != null && contaDestino != null && contaOrigem.sacar(valor)) {
			contaDestino.depositar(valor)

			return true
		}

		return false
	}

	private consultarPorIndice(numero: string): number {
		let indice: number = -1

		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero() == numero) {
				indice = i
				break
			}
		}

		return indice
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero());
		if (indice != -1) {
			this._contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this._contas.length; i++) {
				this._contas[i] = this._contas[i+1];
			}

			this._contas.pop();
		} 
	}

	depositar(numero: string, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

	renderJuros(numero: string): void {

	}

    quantidadeContas(): number {
        return this._contas.length;
    }

    totalSaldos(): number {
        let totalSaldo: number = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo();
        }

        return totalSaldo;
    }

    mediaSaldos() {
        return this.totalSaldos() / this.quantidadeContas();
    }
}
