import { getNumber } from '../Utils/input.js'

function main() {
    console.clear()
    console.log('## Mostrar os números entre intervalo ##\n')

    const min = getNumber('Menor valor: ')
    const max = getNumber('Maior valor: ')

    console.log()

    for (let i = min + 1; i < max; i++) {
        console.log(`${i}`)
    }
}

main()
