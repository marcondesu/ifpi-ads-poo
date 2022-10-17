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
        return `${this.texto}\nCurtidas: ${this.curtidas}`
    }
}

class Microblog {
    postagens: Postagem[] = []
    // postagem_aux: Postagem

    incluirPostagem(post: Postagem): void {
        this.postagens.push(post)
    }

    excluirPostagem(id: number): void {
        for (let i: number = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                for (let j: number = i; j < this.postagens.length; j++) {
                    this.postagens[j] = this.postagens[j + 1]
                    // this.postagem_aux = this.postagens[j + 1]
                    // this.postagens[j] = this.postagem_aux
                }

                this.postagens.pop()
            }
        }
    }

    postagemMaisCurtida(): string {

        for (let i: number = 0; i < this.postagens.length; i++) {

        }
    }
}
