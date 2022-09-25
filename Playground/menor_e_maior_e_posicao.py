""" Lista2_q10) Faça um programa que grave uma lista com 15 posições, calcule e mostre:
a) O maior elemento da lista e em que posição esse elemento se encontra;
b) O menor elemento da lista e em que posição esse elemento se encontra. """
 
def main():
    lista = criar_lista()

    maior_e_posicao = maior_lista(lista)
    menor_e_posicao = menor_lista(lista)

    print(maior_e_posicao)
    print(menor_e_posicao)

def criar_lista():
    lista = []
    
    for i in range(15):
        lista.append(int(input("> ")))

    return lista

def maior_lista(lista):
    maior = lista[0]
    posicao_maior = 1

    for i in range (len(lista)):
        if lista[i] > maior:
           maior = lista[i]
           posicao_maior = i + 1

    return maior,posicao_maior

def menor_lista(lista):
    menor = lista[0]
    posicao_menor = 1

    for i in range (len(lista)):
        if lista[i] < menor:
           menor = lista[i]
           posicao_menor = i + 1

    return menor, posicao_menor

main()
