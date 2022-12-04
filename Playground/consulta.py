'''Utilizando o processo de abstração, implementar uma classe que represente uma consulta médica.
Execução:
- Criar um menu principal para manipulação das consultas médicas criadas.
opções: 
1 - Nova consulta (agendamento)
2- Pagar Consulta
3- Cancelar consulta
4- Agendar retorno
5- Relatório de consultas realizadas no mes por médico
6- Relatório de faturamento da Clinica por mes
OBS: 
1- Cada médico recebe R$ 200 por consulta realizada
2- Valor da consulta: R$ 300
3- utilizar todos os recursos vistos até o momento.
Reescreva o código referente ao problema da clinica médica, agora criando as classes e implementando suas respectivas associações. Novas classes a serem criadas: 
Médico
Paciente
ConsultaMédicaReescreva o código referente ao problema da clinica médica, agora criando as classes e implementando suas respectivas associações. Novas classes a serem criadas: 
Médico
Paciente
ConsultaMédica'''

from datetime import *
consultas = []
class Consulta():
    def __init__(self,data_consulta,paciente,medico):
        if data_consulta < datetime.today():
            print('erro!!!!data menor que atual!!!!')
        else:
            self.__data_consulta = data_consulta
            self.__paciente = paciente
            self.__medico = medico
            self.__pago = False
            self.__valor=300
            self.__data_retorno=None

    #ENCAPSULAMENTO
    @property
    def data_consulta(self):
        return self.__data_consulta
    @data_consulta.setter
    def data_consulta(self,valor):
        print('nao pode alterar a data')
    
    @property
    def paciente(self):
        return self.__paciente
    @paciente.setter
    def paciente(self,valor):
        print('impossivel alterar o paciente')
    
    @property
    def medico(self):
        return self.__medico
    @medico.setter
    def medico(self,valor):
        print('impossivel alterar o medico')
    
    @property
    def pago(self):
        return self.__pago
    
    @pago.setter
    def pago(self,valor):
        print('impossivel mudar o estado')
    
    @property
    def valor (self):
        return self.__valor
    @valor.setter
    def valor(self,valor):
        print('impossivel alterar o valor')
    
    @property
    def data_retorno(self):
        return self.__data_retorno
    @data_retorno.setter
    def data_retorno(self,valor):
        print('impossivel mudar a data do retorno')
    
    @property
    def consultas(self):
        return self.__consultas
    @consultas.setter
    def consultas(self,valor):
        print('impossível alterar as consultas')



    #MÉTODOS
    def pagar_consulta(self):
        self.__pago = True
    
    def cancelar_consulta(self):
        self.__data_consulta = None
    
    def agendar_retorno(self,data):
        if self.__pago==True:
            data_retorno = datetime.strptime(data, "%d/%m/%Y")
            if data_retorno > self.__data_consulta:
                self.__data_retorno = data_retorno
                print("retorno agendado com sucesso!")
            else:
                print("data de retorno tem que ser maior que a data da consulta!")
        else:
            print("pague a consulta pra poder marcar o retorno!") 


''''
Lorrana = Consulta(datetime.strptime("30/11/2022", "%d/%m/%Y"),'Lorrana','Victor')
print(Lorrana.pago)
Lorrana.pagar_consulta()
#print(Lorrana.pago)
#print(Lorrana.data_consulta)
#Lorrana.cancelar_consulta()
print(Lorrana.data_consulta)
Lorrana.agendar_retorno('22/12/2022')'''


###########CLASSE PACIENTE###################

from datetime import *
class Paciente:
    def __init__(self,cpf,nome):
        self.__cpf = cpf
        self.__nome = nome

    @property
    def nome(self):
        return self.__nome

    @property
    def cpf(self):
        return self.__cpf

###########CLASSE MEDICO#########################3
class Medico:
    def __init__(self,crm, nome, especialidade):
        self.__crm = crm
        self.__nome = nome
        self.__especialidade = especialidade
        
    @property
    def nome(self):
        return self.__nome
    
    @property
    def crm (self):
        return self.__crm
    
    @property
    def especialidade(self):
        return self.__especialidade



class ConsultaMedica:
    quantidade_consultas=0
    def __init__(self,data,paciente,medico):
        ConsultaMedica.quantidade_consultas+=1
        self.__qtd = ConsultaMedica.quantidade_consultas
        if data.date() < datetime.today().date():
            print("data antiga!")
        else:
            self.__data = data
        self.__paciente = paciente
        self.__medico = medico
        self.__pago=False
        
    
    @property
    def pago(self):
        return self.__pago
    
    def __str__(self):
        return f'Consulta agendada para: {self.__data}\n'+ f'Paciente: {self.__paciente.nome}'+ f'\nMédico: {self.__medico.nome}' + f'\nQuantidade de Consultas: {self.__qtd}'



####################WHILE TRUE################################33
from datetime import datetime
def procura_consulta(paciente,pago=False):

    for i in consultas:
        if i.paciente == paciente and i.pago == pago:
            return i
    return None

while True:
    print("1-Nova Consulta:")
    print("2-Pagar Consulta:")
    print("3-Cancelar Consulta:")
    print("4-Agendar retorno:")
    print("5-Sair")
    opcao = int(input("opção:"))
    if opcao == 1:
        while True:
            data_c=input("entre com a data da consulta:")
            data_c = datetime.strptime(data_c,"%d/%m/%Y")
            if data_c < datetime.today():
                print("data nao pode ser menor que data atual.")
            else:
                break
        pac = input("entre com o paciente: ")
        medico = input("entre com o médico: ")
        cons = ConsultaMedica(data_c,pac,medico)
        consultas.append(cons)


    elif opcao == 2:
        paciente = input("Entre com o nome do paciente:") 
        c = procura_consulta(paciente)
        if c != None and not c.pago:
            c.pago=True
            print("consulta paga com sucesso!")
        else:
            print("Consulta já está paga!") 





'''
print('========CONSULTA 1=========')
paciente1 = Paciente(2245,"Victor")
medico1 = Medico(12345,"Klaus","Cardiologista")
data = datetime.strptime(input("Entre com a data no formato: dd/mm/aaaa:"), "%d/%m/%Y").date()
consulta1 = ConsultaMedica(data,paciente1,medico1)
print(consulta1)

print('========CONSULTA 2=========')
paciente2 = Paciente(16862,'Pedro')
medico2 = Medico(132,'Marcia','alergista')
data = datetime.strptime(input("Entre com a data no formato: dd/mm/aaaa:"), "%d/%m/%Y").date()
consulta2 = ConsultaMedica(data,paciente2,medico2)
print(consulta2)


print('========CONSULTA 3=========')
paciente3 = Paciente(162,'Lucas')
medico3 = Medico(132,'Paulo','alergista')
data = datetime.strptime(input("Entre com a data no formato: dd/mm/aaaa:"), "%d/%m/%Y").date()
consulta3 = ConsultaMedica(data,paciente3,medico3)
print(consulta3)


print('========CONSULTA 4=========')
paciente4 = Paciente(223,'Kelmon')
medico4 = Medico(8038,'Paulo','pediatra')
data = datetime.strptime(input("Entre com a data no formato: dd/mm/aaaa:"), "%d/%m/%Y").date()
consulta4 = ConsultaMedica(data,paciente4,medico4)
'''
