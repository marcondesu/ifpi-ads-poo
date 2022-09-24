def main():
    tamanho = int(input("Tamanho da lista: "))
    print(criar_lista(tamanho))

def criar_lista(tamanho):
    lista = []
    
    for i in range(tamanho):
        lista.append(get_caractere())

    return lista

def get_caractere():
    caractere = input("> ")

    try:
        caractere = int(caractere)

        print("Erro! Digite um caractere\n")
        return get_caractere()

    except:
        return caractere

main()
