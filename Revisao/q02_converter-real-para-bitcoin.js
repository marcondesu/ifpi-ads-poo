import { getNumber } from '../Utils/input.js'

function main() {
    const real = getNumber('Valor em real: ')
    const bitcoin = real / 118521.37

    console.log(`R$ ${real.toFixed(2)} - BTC ${bitcoin.toFixed(8)}`)
}

main()
