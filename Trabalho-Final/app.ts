import { Usuario, PlanoBasico } from './Plano'

let basico: PlanoBasico = new PlanoBasico()

let user1: Usuario = new Usuario('1', 'Cibelle')
let user2: Usuario = new Usuario('2', 'Marcos')

basico.inserir(user1)
// basico.inserir(user2)
