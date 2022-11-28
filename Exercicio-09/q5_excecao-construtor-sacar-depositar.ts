import { Conta } from '../Banco/Banco'

// Exceção no CONSTRUTOR
let conta_1 = new Conta('1', -1) 

// Exceção no método SACAR
let conta_2 = new Conta('1', 50)
conta_2.sacar(-1)

// Exceção no método DEPOSITAR
conta_2.depositar(-1)
