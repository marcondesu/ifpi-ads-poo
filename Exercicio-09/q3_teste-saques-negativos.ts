import { Conta } from '../Banco/Banco'

let conta_1 = new Conta('1', 100)
conta_1.sacar(150)

// Exceção lançada devido ao saque que deixaria saldo negativo
