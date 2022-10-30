var Produto = /** @class */ (function () {
    function Produto(id, descricao, quantidade, valorUnitario) {
        this._id = id;
        this._descricao = descricao;
        this._quantidade = quantidade;
        this._valorUnitario = valorUnitario;
    }
    Produto.prototype.repor = function (quantidade) {
        this._quantidade += quantidade;
    };
    Produto.prototype.darBaixa = function (quantidade) {
        this._quantidade -= quantidade;
    };
    return Produto;
}());
var ProdutoPerecivel = /** @class */ (function () {
    // "YYYY-MM-DD"
    function ProdutoPerecivel(dataValidade) {
        this._dataValidade = new Date(dataValidade);
    }
    return ProdutoPerecivel;
}());
var produto_perecivel = new ProdutoPerecivel('2022-12-13');
var data_1 = new Date('2022-12-11');
var data_2 = new Date('2022-12-13');
console.log(data_1.toString());
console.log(data_2.valueOf());
