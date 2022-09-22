const array_numeros: number[] = [1, 2, 3, 4, 5]

let array_formatado: string = ""

array_numeros.forEach((item, index) => {
    if (index !== array_numeros.length - 1) {
        array_formatado += item + "-"
    } else {
        array_formatado += item
    }
})

console.log(array_formatado)
