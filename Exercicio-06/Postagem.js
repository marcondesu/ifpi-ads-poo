var Postagem = /** @class */ (function () {
    function Postagem(id, texto, qtd_curtidas) {
        this.id = id;
        this.texto = texto;
        this.curtidas = qtd_curtidas;
    }
    Postagem.prototype.curtir = function () {
        this.curtidas++;
    };
    Postagem.prototype.toString = function () {
        return "Texto: ".concat(this.texto, "\nCurtidas: ").concat(this.curtidas);
    };
    return Postagem;
}());
var Microblog = /** @class */ (function () {
    function Microblog() {
        this.postagens = [];
    }
    Microblog.prototype.incluirPostagem = function (post) {
        this.postagens.push(post);
    };
    Microblog.prototype.excluirPostagem = function (id) {
        var postAux;
        for (var i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                for (var j = i; j < this.postagens.length; j++) {
                    postAux = this.postagens[j + 1]; // guarda o post seguinte em memória
                    this.postagens[j] = this.postagens[j + 1]; // move o post atual pra frente
                    this.postagens[j] = postAux; // restaura post guardado
                }
                this.postagens.pop();
            }
        }
    };
    Microblog.prototype.postagemMaisCurtida = function () {
        var postagem = this.postagens[0];
        for (var i = 1; i < this.postagens.length; i++) {
            if (this.postagens[i].curtidas > postagem.curtidas) {
                postagem = this.postagens[i];
            }
        }
        return postagem.toString();
    };
    return Microblog;
}());
var blog = new Microblog();
var post1 = new Postagem(1, 'Bom dia', 3);
var post2 = new Postagem(2, 'Boa tarde', 5);
var post3 = new Postagem(3, 'Boa noite', 10);
blog.incluirPostagem(post1);
blog.incluirPostagem(post2);
blog.incluirPostagem(post3);
blog.excluirPostagem(2);
console.log(blog.postagens);
console.log(blog.postagemMaisCurtida());
