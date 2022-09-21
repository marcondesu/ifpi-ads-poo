function saudar(nome: string, sobrenome?: string): string {
    if (sobrenome) {
        return nome + " " + sobrenome
    }

    return "Sr. " + nome
}

console.log(saudar("Marcos"))
console.log(saudar("Marcos", "Vinícius"))
