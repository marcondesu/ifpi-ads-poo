class LimiteDeUsuariosError extends Error {
    constructor(message: string) {
        super(message)
    }
}

class ContaJaInseridaError extends Error {
    constructor(message: string) {
        super(message)
    }
}

class UsuarioNaoEncontradoError extends Error {
    constructor(message: string) {
        super(message)
    }
}

class ContaInexistenteError extends Error {
    constructor(message: string) {
        super(message)
    }
}

export { LimiteDeUsuariosError, ContaJaInseridaError, UsuarioNaoEncontradoError, ContaInexistenteError }
