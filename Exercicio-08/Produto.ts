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

    /* verificarValidade(dataAtual: Date): void {

    } */
}

let produto_perecivel: ProdutoPerecivel = new ProdutoPerecivel('2022-12-13')
let data_1: Date = new Date('2022-12-11')
let data_2: Date = new Date('2022-12-13')

console.log(data_1.toSource())
console.log(data_2.valueOf())
