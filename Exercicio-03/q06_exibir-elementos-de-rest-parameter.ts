const exibirElementos = (...elements: string[]): void => {
    for (let i: number = 0; i < elements.length; i++) {
        console.log(elements[i])
    }
    
    console.log() // quebra de linha
}

exibirElementos("a", "b")
exibirElementos("a", "b", "c")
exibirElementos("a", "b", "c", "d")
