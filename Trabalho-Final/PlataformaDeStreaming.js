"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlataformaDeStreaming = exports.ContaPremium = exports.ContaPadrao = exports.ContaBasica = exports.Usuario = void 0;
const Erros_1 = require("./Erros");
class Usuario {
    constructor(id, nome) {
        this._id = id;
        this._nome = nome;
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
}
exports.Usuario = Usuario;
class ContaBasica {
    constructor(id) {
        this._usuarios = [];
        this._id = id;
    }
    get id() {
        return this._id;
    }
    get usuarios() {
        return this._usuarios;
    }
    inserir(usuario) {
        if (this.usuarios[0] != null) {
            throw new Erros_1.LimiteDeUsuariosError("A conta não suporta mais usuários.");
        }
        this.usuarios.push(usuario);
    }
    alterar(usuario) {
        this.usuarios[0] = usuario;
    }
    infoUsers() {
        let infoUsers = "";
        for (let i = 0; i < this.usuarios.length; i++) {
            infoUsers = infoUsers +
                "- ID: " + this.usuarios[i].id + " | Nome: " + this.usuarios[i].nome + "\n";
        }
        return infoUsers;
    }
}
exports.ContaBasica = ContaBasica;
class ContaPadrao extends ContaBasica {
    inserir(usuario) {
        if (this.usuarios[1] != null) {
            throw new Erros_1.LimiteDeUsuariosError("A conta não suporta mais usuários.");
        }
        else if (this.consultar(usuario.id)) {
            throw new Erros_1.ContaJaInseridaError("Conta já inserida.");
        }
        this.usuarios.push(usuario);
    }
    consultar(id) {
        for (let usuario of this.usuarios) {
            if (usuario.id == id) {
                return true;
            }
        }
        return false;
    }
    consultarPorIndice(id) {
        let indiceProcurado = -1;
        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].id == id) {
                indiceProcurado = i;
            }
        }
        if (indiceProcurado == -1) {
            throw new Erros_1.UsuarioNaoEncontradoError("Usuário não cadastrado: " + id);
        }
        return indiceProcurado;
    }
    excluir(id) {
        let indice = this.consultarPorIndice(id);
        for (var i = indice; i < this.usuarios.length; i++) {
            this.usuarios[i] = this.usuarios[i + 1];
        }
        this.usuarios.pop();
    }
}
exports.ContaPadrao = ContaPadrao;
class ContaPremium extends ContaPadrao {
    constructor(id) {
        super(id);
    }
    inserir(usuario) {
        if (this.usuarios[3] != null) {
            throw new Erros_1.LimiteDeUsuariosError("A conta não suporta mais usuários.");
        }
        else if (this.consultar(usuario.id)) {
            throw new Erros_1.ContaJaInseridaError("Conta já inserida.");
        }
        this.usuarios.push(usuario);
    }
}
exports.ContaPremium = ContaPremium;
class PlataformaDeStreaming {
    constructor() {
        this._contas = [];
    }
    inserir(conta) {
        try {
            if (this.consultar(conta.id) != null) {
                throw new Erros_1.ContaJaInseridaError("Conta já cadastrada.");
            }
        }
        catch (e) {
            if (e instanceof Erros_1.ContaJaInseridaError) {
                throw e;
            }
            this._contas.push(conta);
        }
    }
    consultar(numero) {
        let contaConsultada;
        for (let conta of this._contas) {
            if (conta.id == numero) {
                contaConsultada = conta;
                break;
            }
        }
        if (contaConsultada == null) {
            throw new Erros_1.ContaInexistenteError("Conta não encontrada.");
        }
        return contaConsultada;
    }
    consultarPorIndice(id) {
        let indice = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].id == id) {
                indice = i;
                break;
            }
        }
        if (indice == -1) {
            throw new Erros_1.ContaInexistenteError("Conta não encontrada.");
        }
        return indice;
    }
    excluir(id) {
        let indice = this.consultarPorIndice(id);
        if (indice != -1) {
            for (let i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }
}
exports.PlataformaDeStreaming = PlataformaDeStreaming;
