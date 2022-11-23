export const input = require('prompt-sync')()
import { Banco, Conta, ContaImposto, Poupanca } from "./Banco"

let banco: Banco = new Banco()
let opcao: string

do {
    console.clear()
    mostrarMenu()
    opcao = input('> ')

    console.clear()

    switch(opcao) {
        case '1':
            inserir()
            break

        case '2':
            consultar()
            break
        
        case '3':
            sacar()
            break
        
        case '4':
            depositar()
            break

        case '5':
            excluir()
            break

        case '6':
            transferir()
            break

        case '7':
            totalizacoes()
            break
        
        case '8':
            renderJuros()
        }

        enterToContinue()
} while (opcao != '0')

function mostrarMenu(): void {
    let menu: string = '1 - Cadastrar\n'
    menu += '2 - Consultar\n'
    menu += '3 - Sacar\n'
    menu += '4 - Depositar\n'
    menu += '5 - Excluir\n'
    menu += '6 - Transferir\n'
    menu += '7 - Totalizações\n'
    menu += '8 - Render juros\n'
    menu += '0 - Sair\n'

    console.log(menu)
}

function enterToContinue(): void {
    console.log()
    input('<Enter> Para continuar...')
}

function obterConta(): Conta {
    const numero: string = input('Número da conta: ')
    const conta: Conta = banco.consultar(numero)

    if (conta == null) {
        console.log('\n- Operação inválida. Não existe uma conta com o número informado.')
    }
    
    return conta
}

function obterTipoDeConta(): string {
    console.log('c - Conta comum');
    console.log('p - Conta poupança');
    console.log('i - Conta imposto\n');
    
    const tipo = input('Tipo da conta: ').toLowerCase()

    if (tipo != 'c' && tipo != 'p' && tipo != 'i') {
        console.log('\n- Operação inválida! Selecione um dos tipos de conta acima.\n')
        
        return obterTipoDeConta()
    }

    return tipo
}

function inserir(): void {
    console.log('### Cadastrar conta ###\n')
    
    const tipo: string = obterTipoDeConta()
    let numero: string = input('Número da conta: ')

    let conta!: Conta
    
    if (tipo == 'c') {
        conta = new Conta(numero, 0);
    } else if (tipo == 'p') {
        conta = new Poupanca(numero, 0, 0.5)
    } else {
        conta = new ContaImposto(numero, 0, 0.38);
    }
    
    if (banco.consultar(numero) != null) {
        console.log('\n- Operação inválida. Não é possível inserir uma conta com um número existente.')
    } else {
        banco.inserir(conta)
        console.log('\n- Conta cadastrada com sucesso!')
    }
}

function consultar(): void {
    console.log('### Consultar conta ###\n')

    const conta: Conta = obterConta()
    
    if (conta != null) {
        console.log(`\n- Saldo: R$${conta.saldo().toFixed(2)}`)
    }

}

function sacar(): void {
    console.log('### Sacar ###\n')

    const conta: Conta = obterConta()

    if (conta != null) {
        const valor: number = Number(input('Valor: '))

        if (conta.sacar(valor)) {
            console.log('\n- Saque realizado com sucesso!')
        } else {
            console.log('\n- Operação inválida. Saldo insuficiente.')
        }
    }
}

function depositar(): void {
    console.log('### Depositar ###\n')

    const conta: Conta = obterConta()

    if (conta != null) {
        const valor: number = Number(input('Valor: '))

        conta.depositar(valor)

        console.log('\n- Depósito realizado com sucesso!')
    }
}

function excluir(): void {
    console.log('### Excluir ###\n')

    const conta: Conta = obterConta()

    if (conta != null) {
        banco.excluir(conta.numero())

        console.log('- Conta excluída com sucesso!')
    }
}

function transferir(): void {
    console.log('### Transferir ###\n')

    console.log('Conta de origem')
    const contaOrigem: Conta = obterConta()

    if (contaOrigem != null) {
        console.log('\nConta de destino')
        const contaDestino: Conta = obterConta()
    
        if (contaDestino != null) {
            console.log()            
            const valor: number = Number(input('Valor: '))

            if (banco.transferir(contaOrigem.numero(), contaDestino.numero(), valor)) {
                console.log('\n- Transferência realizada com sucesso!')
            } else {
                console.log('\n- Falha! A conta de origem não possui saldo suficiente.')
            }
        }
    }
}

function totalizacoes(): void {
    console.log('### Transferir ###\n')

    console.log(`Quantidade de contas: ${banco.quantidadeContas()}`)
    console.log(`Total de saldos nas contas: R$${banco.totalSaldos().toFixed(2)}`)
    console.log(`Média de saldo: R$${banco.mediaSaldos().toFixed(2)}`)
}

function renderJuros(): void {
    const conta = obterConta()

    if (conta instanceof Poupanca) {
        (<Poupanca> conta).renderJuros()

        console.log('\n- Juros rendendo...');
    }
}
