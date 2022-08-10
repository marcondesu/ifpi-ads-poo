import { getNumber } from '../Utils/input.js'

function main() {
    const value_1 = getNumber('1º valor: ')
    const value_2 = getNumber('2º valor: ')
    const value_3 = getNumber('3º valor: ')

    const [maior, menor] = getMaiorEMenorValor(value_1, value_2, value_3)

    console.log(`Menor: ${menor}\nMaior: ${maior}`)
}

function getMaiorEMenorValor(v1, v2, v3) {
    if (v1 > v2) {
        if (v2 > v3) {
            return [v1, v3]
        }

        return [v3, v1]
    }
}

main()
