import { input } from '../io-utils.js'

function main() {
    const variable = Number(input('Número: '))
    const antecessor = Math.trunc(variable)
    const sucessor = Math.ceil(variable)
    
    console.log(`\nAntecessor: ${antecessor}\nSucessor: ${sucessor}`)
}

main()
