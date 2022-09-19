class Consulta():
    def __init__(self, agendamento):
        self.agendamento = agendamento

    def agendar(self):
        self.agendamento + 1

consulta = Consulta(0)

    continuar = True
    opcao = 0
    menu = '\n-------------------\n'
    menu += '1. Nova consulta\n'

    while continuar:
        print(menu)

        opcao = int(input('> '))

        if (opcao == 1) {
            consulta.agendar()
        }

        input('Enter para continuar...')