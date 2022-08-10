import { getNumber } from '../Utils/input.js'

function main() {
    const variable = getNumber('Número: ')
    const antecessor = Math.trunc(variable)
    const sucessor = Math.ceil(variable)
    
    console.log(`\nAntecessor: ${antecessor}\nSucessor: ${sucessor}`)
}

main()
