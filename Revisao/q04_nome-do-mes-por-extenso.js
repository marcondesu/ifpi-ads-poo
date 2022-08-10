import { getNumberOnRange } from '../Utils/input.js'

function main() {
    console.clear()
    console.log('## Mostrar o nome do mês de acordo com seu número e a quantidade de dias ##\n')

    const number = getNumberOnRange(1, 12, 'Número do mês: ')
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    console.log(`${months[number - 1]} - ${days[number - 1]} dias`)
}

main()
