import { getPositiveNumber } from '../Utils/input.js'

function main() {
    console.clear()
    console.log('## Converter de milissegundos para dias, horas, minutos e segundos ##\n')

    const milissegundos = getPositiveNumber('Milissegundos: ')

    // dias hh:mm:ss [day, hour, minute, second]
    const [day, hour, min, sec] = convertFromMs(milissegundos)

    console.log(`\n${milissegundos}ms - ${day} dias ${hour}:${min}:${sec}`)
}

function convertFromMs(ms) {
    const day = Math.trunc(ms / 86400000)
    const hour = Math.trunc((ms - day * 86400000) / 3600000)
    const min = Math.trunc((ms - day * 86400000 - hour * 3600000) / 60000)
    const sec = Math.trunc((ms - day * 86400000 - hour * 3600000 - min * 60000) / 1000)

    return [day, hour, min, sec]
}

main()
