import { getNumber } from './input.js'

export function createVectorByLength(length) {
    const vector = new Array(length)

    for (let i = 0; i < length; i++) {
        vector[i] = getNumber(`${i + 1}º valor: `)
    }

    return vector
}

export function createAndFillVector() {
    let counter = 1
    let number = getNumber(`${counter}º valor: `)
    let vector = []
    
    while (number !== -1) {
        vector.push(number)
        
        counter++
        number = getNumber(`${counter}º valor: `)
    }

    return vector
}

export function sumVectorValues(vector) {
    let sum = 0

    for (let value of vector) {
        sum += value
    }

    return sum
}

export function getAverageVectorValue(vector) {
    const sum = sumVectorValues(vector)

    return sum / vector.length
}
