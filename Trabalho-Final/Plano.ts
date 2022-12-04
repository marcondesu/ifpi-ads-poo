import { LimiteUsuario } from './Erros'

class Usuario {
    private _id: string
    private _nome: string

    constructor(id: string, nome: string) {
        this._id = id
        this._nome = nome
    }
}

class PlanoBasico {
    private _usuarios: Usuario[] = []

    inserir(usuario: Usuario): void {
        if (this._usuarios[0] != null) {
            throw new LimiteUsuario("O plano não suporta mais usuários.")
        }

        this._usuarios.push(usuario)
    }
}

export { Usuario, PlanoBasico }
