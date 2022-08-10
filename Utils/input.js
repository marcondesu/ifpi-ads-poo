import prompt from 'prompt-sync'
const input = prompt()

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
