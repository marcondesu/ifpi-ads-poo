import { Usuario, ContaBasica, ContaPadrao, ContaPremium, PlataformaDeStreaming } from './PlataformaDeStreaming'
export const input = require('prompt-sync')()

let plataforma: PlataformaDeStreaming = new PlataformaDeStreaming()
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
            excluir()
            break
    }
        enterToContinue()
} while (opcao != '0')

function mostrarMenu(): void {
    let menu: string = '1 - Cadastrar\n'
    menu += '2 - Informação de conta\n'
    menu += '3 - Excluir\n'
    menu += '0 - Sair\n'

    console.log(menu)
}

function enterToContinue(): void {
    console.log()
    input('<Enter> Para continuar...')
}

function obterConta(): ContaBasica {
    const numero: string = input('Número da conta: ')
    let conta!: ContaBasica
    
    try {
        conta = plataforma.consultar(numero)
    } catch (e: any) {
        console.log("Operação inválida. Não existe uma conta com o número informado.")
    }
    
    return conta
}

function obterTipoDeConta(): string {
    console.log('b - Conta básica')
    console.log('p - Conta padrão')
    console.log('pr - Conta premium\n')
    
    const tipo = input('Tipo da conta: ').toLowerCase()

    if (tipo != 'b' && tipo != 'p' && tipo != 'pr') {
        console.log('\n- Operação inválida! Selecione um dos tipos de conta acima.\n')
        
        return obterTipoDeConta()
    }

    return tipo
}

function inserir(): void {
    console.log('### Cadastrar conta ###\n')
    
    const tipo: string = obterTipoDeConta()
    let numero: string = input('Número da conta: ')

    let conta!: ContaBasica
    
    if (tipo == 'b') {
        conta = new ContaBasica(numero)
    } else if (tipo == 'p') {
        conta = new ContaPadrao(numero)
    } else {
        conta = new ContaPremium(numero)
    }

    console.log('\nInserir usuários\n')
    let option: string = ''

    while (option != 'n') {
        let id: string = input('Id: ')
        let nome: string = input('Nome: ')

        let usuario: Usuario = new Usuario(id, nome)
        
        try {
            conta.inserir(usuario)
        } catch (e: any) {
            console.log("A conta não suporta mais usuários.\n")
            break
        }

        option = input('Deseja inserir mais um usuário? (s/n): ')
    }
    
    plataforma.inserir(conta)
}

function consultar(): void {
    console.log('### Consultar conta ###\n')

    const conta: ContaBasica = obterConta()
    
    if (conta != null) {
        console.log(`${conta.infoUsers()}`)
    }
}

function excluir(): void {
    console.log('### Excluir ###\n')

    const conta: ContaBasica = obterConta()

    if (conta != null) {
        plataforma.excluir(conta.id)

        console.log('- Conta excluída com sucesso!')
    }
}
