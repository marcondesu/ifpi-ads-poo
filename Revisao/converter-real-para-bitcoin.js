import { input } from '../io-utils.js'

function main() {
    const real = Number(input('Valor em real: '))
    const bitcoin = real / 118521.37

    console.log(`R$ ${real.toFixed(2)} - BTC ${bitcoin.toFixed(8)}`)
}

main()
