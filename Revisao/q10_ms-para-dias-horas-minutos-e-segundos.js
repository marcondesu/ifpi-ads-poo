import { getPositiveNumber } from '../Utils/input.js'

function main() {
    console.clear()
    console.log('## Converter de milissegundos para dias, horas, minutos e segundos ##\n')

    const milissegundos = getPositiveNumber('Milissegundos: ')

    // dias hh:mm:ss [day, hour, minute, second]
    const test = convertFromMs(milissegundos)
}

function convertFromMs(ms) {
    const day = Math.trunc(ms / 86400000)
    const hour = day * 86400000 / 3600000 

    console.log(day, hour)
}

main()
