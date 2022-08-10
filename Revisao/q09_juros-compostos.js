import { getPositiveNumber } from '../Utils/input.js'

function main() {
    console.clear()
    console.log('## Juros compostos aplicados a 12 meses ##\n')

    // tax = t
    const tax = getPositiveNumber('Taxa em %: ')

    // value = v
    const value = getPositiveNumber('Valor em R$: ')

    const juros_aplicados = aplicarJurosA12Meses(value, tax)

    console.log()

    for (let i = 0; i < juros_aplicados.length; i++) {
        console.log(`${i + 1} mês: R$ ${juros_aplicados[i].toFixed(2)}`)
    }
}

function aplicarJurosA12Meses(v, t) {
    let juros = []

    for (let i = 0; i < 12; i++) {
        v += v / (t * 100)
        juros.push(v)
    }

    return juros
}

main()
