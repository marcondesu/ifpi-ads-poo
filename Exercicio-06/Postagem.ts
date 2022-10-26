class Postagem {
    id: number
    texto: string
    curtidas: number

    constructor(id: number, texto: string, qtd_curtidas: number) {
        this.id = id
        this.texto = texto
        this.curtidas = qtd_curtidas
    }

    curtir(): void {
        this.curtidas++
    }

    toString(): string {
        return `Texto: ${this.texto}\nCurtidas: ${this.curtidas}`
    }
}

class Microblog {
    postagens: Postagem[] = []

    incluirPostagem(post: Postagem): void {
        this.postagens.push(post)
    }

    excluirPostagem(id: number): void {
        let postAux: Postagem;

        for (let i: number = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                for (let j: number = i; j < this.postagens.length; j++) {
                    postAux = this.postagens[j + 1] // guarda o post seguinte em memória
                    this.postagens[j] = this.postagens[j + 1] // move o post atual pra frente
                    this.postagens[j] = postAux // restaura post guardado
                }

                this.postagens.pop()
            }
        }
    }

    postagemMaisCurtida(): string {
        let postagem: Postagem = this.postagens[0];

        for (let i: number = 1; i < this.postagens.length; i++) {
            if (this.postagens[i].curtidas > postagem.curtidas) {
                postagem = this.postagens[i]
            }
        }

        return postagem.toString()
    }
}

let blog: Microblog = new Microblog()

const post1: Postagem = new Postagem(1, 'Bom dia', 3)
const post2: Postagem = new Postagem(2, 'Boa tarde', 5)
const post3: Postagem = new Postagem(3, 'Boa noite', 10)

blog.incluirPostagem(post1)
blog.incluirPostagem(post2)
blog.incluirPostagem(post3)

blog.excluirPostagem(2)
console.log(blog.postagens);

console.log(blog.postagemMaisCurtida())
