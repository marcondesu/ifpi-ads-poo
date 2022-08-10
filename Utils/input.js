import * as fs from 'fs'

import prompt from 'prompt-sync'
const input = prompt()

export function getText(msg) {
    return input(msg)
}

export function getNumber(msg) {
    return Number(input(msg))
}

export function getPositiveNumber(msg) {
    const number = getNumber(msg)

    if (number < 0) {
        console.log('[X] Erro! O número deve ser negativo')
        
        return getPositiveNumber(msg)
    }
    
    return number
}

export function getNumberOnRange(min, max, msg) {
    const number = getNumber(msg)
    
    if (number < min || number > max) {
        console.log(`[X] Erro! O valor deve estar entre ${min} e ${max}.\n`)
        
        return getNumberOnRange(min, max, msg)
    }

    return number
}

export function loadFile(file){
    try{
        const data = fs.readFileSync(file, 'utf-8')
        return data
    } catch (error){
        console.error(error)
    }
}
