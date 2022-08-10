import prompt from 'prompt-sync'
const input = prompt()

export function getNumber(msg) {
    return Number(input(msg))
}
