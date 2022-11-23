class Produto {
    private _id: string
    private _descricao: string
    private _quantidade: number
    private _valorUnitario: number

    constructor(id: string, descricao: string, quantidade: number, valorUnitario: number) {
        this._id = id
        this._descricao = descricao
        this._quantidade = quantidade
        this._valorUnitario = valorUnitario
    }

    repor(quantidade: number): void {
        this._quantidade += quantidade
    }

    darBaixa(quantidade: number): void {
        this._quantidade -= quantidade
    }
}

class ProdutoPerecivel {
    private _dataValidade: Date

    // "YYYY-MM-DD"
    constructor(dataValidade: string) {
        this._dataValidade = new Date(dataValidade)
    }

    verificarValidade(dataAtual: Date): boolean {
        let dtAtualValor = getData(dataAtual)
        let dtValidadeValor = getData(this._dataValidade)

        console.log(dtAtualValor, dtValidadeValor)

        if (dtValidadeValor - dtAtualValor > 0) {
            return true
        }

        return false
    }
}

function getData(data: Date): number {
    let valor: number = data.getFullYear()

    valor += data.getDate()
    valor += data.getMonth()
    valor += data.getDay()

    return valor
}

let produto_perecivel: ProdutoPerecivel = new ProdutoPerecivel('2022-12-13')
let data_1: Date = new Date('2022-12-11')
let data_2: Date = new Date('2022-12-13')

produto_perecivel.verificarValidade(data_1)
// console.log(data_1.toSo)
// console.log(data_2.valueOf())
