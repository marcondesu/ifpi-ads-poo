const input = require('prompt-sync')()
import { Banco, Conta, Pessoa } from "./Banco"

let banco: Banco = new Banco()

let opcao: string

do {
    console.clear()
    mostrarMenu()
    opcao = input('> ')

    switch(opcao) {
        case '1':
            console.clear()
            inserir()

            enterToContinue()
            break

        case '2':
            console.clear()
            consultar()

            enterToContinue()
            break
        
        case '3':
            console.clear()
            sacar()

            enterToContinue()
            break
        
        case '4':
            console.clear()
            depositar()

            enterToContinue()
            break

        case '5':
            console.clear()
            excluir()

            enterToContinue()
            break

        case '6':
            console.clear()
            transferir()

            enterToContinue()
            break

        case '7':
            console.clear()
            totalizacoes()

            enterToContinue()
            break
        }
} while (opcao != '0')

function mostrarMenu(): void {
    let menu: string = '1 - Cadastrar\n'
    menu += '2 - Consultar\n'
    menu += '3 - Sacar\n'
    menu += '4 - Depositar\n'
    menu += '5 - Excluir\n'
    menu += '6 - Transferir\n'
    menu += '7 - Totalizações\n'
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

function inserir(): void {
    console.log('### Cadastrar conta ###\n')
    
    let numero: string = input('Número da conta: ')

    let conta: Conta = new Conta(numero, 0)
    
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
