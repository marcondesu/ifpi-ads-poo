// 1. Enumere os 3 tipos mais comuns de tratamento de erros e exemplifique com códigos seus ou pesquisados na internet.

// DESCONSIDERAR OPERAÇÃO
// Limitação: usuário não tem como saber se a operação foi realizada ou não
function sacar_1(saldo: number, valor_saque: number) {
    if (saldo - valor_saque > 0) {
        saldo -= valor_saque
    }
}

// EXIBIR MENSAGEM DE ERRO
// Limitação: útil apenas em interfaces de texto
function sacar_2(saldo: number, valor_saque: number) {
    if (saldo - valor_saque > 0) {
        saldo -= valor_saque
    } else {
        console.log("Erro! Saldo insuficiente.");
        
    }
}

// RETORNAR UM CÓDIGO DE ERRO
// Limitação: má prática / necessário teste nos valores de retorno
function sacar_3(saldo: number, valor_saque: number): boolean {
    if (saldo - valor_saque > 0) {
        saldo -= valor_saque
        
        return true
    }

    return false
}
