import { getNumber } from '../Utils/io-utils.js'

function main() {
    const value_1 = getNumber('1º valor: ')
    const value_2 = getNumber('2º valor: ')
    const value_3 = getNumber('3º valor: ')

    const [menor, maior] = getMenorEMaiorNumero(value_1, value_2, value_3)

    console.log(`Menor: ${menor}\nMaior: ${maior}`)
}

function getMenorEMaiorNumero(v1, v2, v3) {
    if (v1 > v2) {
        if (v2 > v3) {
            return [v3, v1]

        } else if (v3 > v1) {
            return [v1, v3]
        }
    
    } else {
        // V2 > V1
        if (v1 > v3) {
            return [v3, v2]
        
        } else if (v3 > v2) {
            return [v2, v3]
        }
    } 
}

main()