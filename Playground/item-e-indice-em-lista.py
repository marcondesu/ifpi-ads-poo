def main():
    valor = int(input("Número a ser pesquisado: "))
    lista = [1, 55, 24, 23, 1, 0, 3, -235, 1000, 6, 41, 1]

    # variável que vai receber a quantidade de ocorrências do valor na lista
    ocorrencias = qtd_de_ocorrencias(lista, valor)

    # variável que vai receber os índices onde o valor aparece na lista
    indices = indices_das_ocorrencias(lista, valor)

    print(f'\n{ocorrencias} ocorrências')
    print(f'\nO valor {valor} apareceu nas posições {indices}')

def indices_das_ocorrencias(list, value):
    i = 0
    indices = []

    while i < len(list):
        if (list[i] == value):
            indices.append(i + 1)
        
        i += 1

    return indices

def qtd_de_ocorrencias(list, value):
    i = 0
    ocorrencias = 0

    # enquanto o índice atual for menor que o tamanho da lista...
    while i < len(list):
        if (list[i] == value):
            ocorrencias += 1
        i += 1

    return ocorrencias

main()
