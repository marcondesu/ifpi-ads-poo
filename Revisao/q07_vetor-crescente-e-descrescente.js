import { createVectorByLength } from '../Utils/vector.js'

function main() {
    console.clear()
    console.log('## Mostrar um vetor de 5 posições em ordem crescente e descrescente ##\n')

    const vector = createVectorByLength(5)

    console.log(vector)
}

main()
