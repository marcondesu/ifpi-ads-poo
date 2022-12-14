import { LimiteDeUsuariosError, ContaJaInseridaError, UsuarioNaoEncontradoError, ContaInexistenteError } from './Erros'

interface IConta {
    inserir(usuario: Usuario): void
    alterar(usuario: Usuario): void
    infoUsers(): string
}

class Usuario {
    private _id: string
    private _nome: string

    constructor(id: string, nome: string) {
        this._id = id
        this._nome = nome
    }

    get id(): string {
        return this._id
    }

    get nome(): string {
        return this._nome
    }
}

class ContaBasica implements IConta {
    private _id: string
    private _usuarios: Usuario[] = []

    constructor(id: string) {
        this._id = id
    }

    get id(): string {
        return this._id
    }

    get usuarios(): Usuario[] {
        return this._usuarios
    }
    
    inserir(usuario: Usuario): void {
        if (this.usuarios[0] != null) {
            throw new LimiteDeUsuariosError("A conta não suporta mais usuários.")
        }

        this.usuarios.push(usuario)
    }

    alterar(usuario: Usuario): void {
        this.usuarios[0] = usuario
    }

    infoUsers(): string {
        let infoUsers = ""

        for (let i: number = 0; i < this.usuarios.length; i++) {
            infoUsers = infoUsers +
            "- ID: " + this.usuarios[i].id + " | Nome: " + this.usuarios[i].nome + "\n"
        }

        return infoUsers
    }
}

class ContaPadrao extends ContaBasica {
    inserir(usuario: Usuario): void {
        if (this.usuarios[1] != null) {
            throw new LimiteDeUsuariosError("A conta não suporta mais usuários.")
        } else if (this.consultar(usuario.id)) {
            throw new ContaJaInseridaError("Conta já inserida.")
        }

        this.usuarios.push(usuario)
    }

    consultar(id: string): boolean {
        for (let usuario of this.usuarios) {
            if (usuario.id == id) {
                return true
            }
        }

        return false
    }

    private consultarPorIndice(id: string): number {
        let indiceProcurado: number = -1

        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].id == id) {
                indiceProcurado = i
            }
        }

        if (indiceProcurado == -1) {
            throw new UsuarioNaoEncontradoError("Usuário não cadastrado: " + id)
        }

        return indiceProcurado
    }

    excluir(id: string): void {
        let indice: number = this.consultarPorIndice(id)
        
        for (var i = indice; i < this.usuarios.length; i++) {
            this.usuarios[i] = this.usuarios[i + 1]
        }

        this.usuarios.pop()
    }
}

class ContaPremium extends ContaPadrao {
    constructor(id: string) {
        super(id)
    }

    inserir(usuario: Usuario): void {
        if (this.usuarios[3] != null) {
            throw new LimiteDeUsuariosError("A conta não suporta mais usuários.")
        } else if (this.consultar(usuario.id)) {
            throw new ContaJaInseridaError("Conta já inserida.")
        }

        this.usuarios.push(usuario)
    }
}

class PlataformaDeStreaming {
    private _contas: ContaBasica[] = []

    inserir(conta: ContaBasica): void {
        try{
            if (this.consultar(conta.id) != null) {
                throw new ContaJaInseridaError("Conta já cadastrada.")
            }
        } catch(e: any) {
            if (e instanceof ContaJaInseridaError) {
                throw e
            }

            this._contas.push(conta);
        }
	}

    consultar(numero: string): ContaBasica {
		let contaConsultada!: ContaBasica

		for (let conta of this._contas) {
			if (conta.id == numero) {
				contaConsultada = conta
				break;
			}
		}

		if (contaConsultada == null) {
			throw new ContaInexistenteError("Conta não encontrada.")
		}
		
		return contaConsultada
	}

    private consultarPorIndice(id: string): number {
		let indice: number = -1

		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].id == id) {
				indice = i
				break
			}
		}

		if (indice == -1) {
			throw new ContaInexistenteError("Conta não encontrada.")
		}

		return indice
	}

    excluir(id: string): void {
		let indice: number = this.consultarPorIndice(id)
		
		if (indice != -1) {
			for (let i: number = indice; i < this._contas.length; i++) {
				this._contas[i] = this._contas[i + 1]
			}

			this._contas.pop()
		} 
	}
}

export { Usuario, ContaBasica, ContaPadrao, ContaPremium, PlataformaDeStreaming }
