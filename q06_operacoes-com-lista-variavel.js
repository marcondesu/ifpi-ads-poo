import { createAndFillVector, getAverageVectorValue, sumVectorValues } from '../Utils/vector.js'

function main() {
    console.clear()
    console.log('## Soma / Média aritmética / Desvio padrão de uma lista de valores ##')
    console.log('Obs.: a lista é encerrada ao inserir -1\n')

    const numbers = createAndFillVector()

    const sum = sumVectorValues(numbers)
    const average_value = getAverageVectorValue(numbers)
    const desvio_padrao = getDesvioPadrao(numbers, average_value)

    console.log(`\nSoma dos valores: ${sum}\nMédia aritmética: ${average_value}\nDesvio padrão: ${desvio_padrao}`)
}

function getDesvioPadrao(vector, average_value) {
    let desvios = []

    for (let value of vector) {
        desvios.push(Math.abs(value - average_value))
    }

    const variancia = getVariancia(desvios)

    return sumVectorValues(variancia) / variancia.length
}

function getVariancia(vector) {
    let variancia = []

    for (let value of vector) {
        variancia.push(value * value)
    }

    return variancia
}

main()
