function saudar(nome, sobrenome) {
    if (sobrenome) {
        return nome + " " + sobrenome;
    }
    return "Sr. " + nome;
}
console.log(saudar("Marcos"));
console.log(saudar("Marcos", "Vinícius"));
