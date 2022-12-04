import { Conta, Banco } from './Banco'

let conta1: Conta = new Conta('1', 100)
let conta2: Conta = new Conta('2', 200)
let banco: Banco = new Banco()

banco.inserir(conta1)
banco.inserir(conta2)

// console.log(banco.totalSaldos())
// banco.consultar('2')
