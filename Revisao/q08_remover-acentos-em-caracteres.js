import { loadFile } from '../Utils/input.js'

function main() {
    console.clear()
    console.log('## Remover acentos em caracteres dentro de um texto ##\n')

    // lê o texto vindo de um arquivo .txt
    const input = loadFile('../Testes/revisao_q08.txt')

    // cria um array e coloca o texto dentro dele para poder manipular cada caractere em caso de substituição
    const text = new Array(input.length)
    for (let i = 0; i < input.length; i++) {
        text[i] = input[i]
    }
    
    removeAccents(text)

    console.log(`- Texto com acentos\n   ${input}\n\n-Texto sem acentos\n   ${text.join('')}`)
}

function removeAccents(text) {
    const codes = ['0xE0', '0xE1', '0xE2', '0xE3', '0xE4', '0xE5', // 0-5 a
                   '0xC0', '0xC1', '0xC2', '0xC3', '0xC4', '0xC5', // 6-11 A
                   '0xE8', '0xE9', '0xEA', '0xEB',                 // 12-15 e
                   '0xC8', '0xC9', '0xCA', '0xCB',                 // 16-19 E
                   '0xEC', '0xED', '0xEE', '0xEF',                 // 20-23 i
                   '0xCC', '0xCD', '0xCE', '0xCF',                 // 24-27 I
                   '0xF2', '0xF3', '0xF4', '0xF5', '0xF6',         // 28-32 o
                   '0xD2', '0xD3', '0xD4', '0xD5', '0xD6',         // 33-37 O
                   '0xF9', '0xFA', '0xFB', '0xFC',                 // 38-41 u
                   '0xD9', '0xDA', '0xDB', '0xDC']                 // 42-45 U

    const chars = ['a', 'a', 'a', 'a', 'a', 'a',
                   'A', 'A', 'A', 'A', 'A', 'A',
                   'e', 'e', 'e', 'e',
                   'E', 'E', 'E', 'E',
                   'i', 'i', 'i', 'i',
                   'I', 'I', 'I', 'I',
                   'o', 'o', 'o', 'o', 'o',
                   'O', 'O', 'O', 'O', 'O',
                   'u', 'u', 'u', 'u',
                   'U', 'U', 'U', 'U']
    
    // percorre os caracteres do texto
    for (let i = 0; i < text.length; i++) {

        // percorre os códigos
        for (let j = 0; j < codes.length; j++) {
            if (text[i] == String.fromCharCode(codes[j])) {
                text[i] = chars[j]
            }
        }
    }

    return text
}

main()
