"use strict";
class Produto {
    constructor(id, descricao, quantidade, valorUnitario) {
        this._id = id;
        this._descricao = descricao;
        this._quantidade = quantidade;
        this._valorUnitario = valorUnitario;
    }
    repor(quantidade) {
        this._quantidade += quantidade;
    }
    darBaixa(quantidade) {
        this._quantidade -= quantidade;
    }
}
class ProdutoPerecivel {
    // "YYYY-MM-DD"
    constructor(dataValidade) {
        this._dataValidade = new Date(dataValidade);
    }
    verificarValidade(dataAtual) {
        let dtAtualValor = getData(dataAtual);
        let dtValidadeValor = getData(this._dataValidade);
        console.log(dtAtualValor, dtValidadeValor);
        if (dtValidadeValor - dtAtualValor > 0) {
            return true;
        }
        return false;
    }
}
function getData(data) {
    let valor = data.getFullYear();
    valor += data.getDate();
    valor += data.getMonth();
    valor += data.getDay();
    return valor;
}
let produto_perecivel = new ProdutoPerecivel('2022-12-13');
let data_1 = new Date('2022-12-11');
let data_2 = new Date('2022-12-13');
produto_perecivel.verificarValidade(data_1);
// console.log(data_1.toSo)
// console.log(data_2.valueOf())
