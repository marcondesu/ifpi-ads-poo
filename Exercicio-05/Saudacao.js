var Saudacao = /** @class */ (function () {
    function Saudacao(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    Saudacao.prototype.obterSaudacao = function () {
        return "".concat(this.texto, ", ").concat(this.destinatario);
    };
    return Saudacao;
}());
var greet = new Saudacao("Bom dia", "Marcos");
console.log(greet.obterSaudacao());
