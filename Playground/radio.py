estacoes = {89.5:'Cocais', 91.5:'Mix', 94.1:'Boa', 99.1:'Clube'}
class Radio():
    def __init__(self, vol_max, estacoes):
        self.volume_min = 0
        self.vol_max = vol_max
        self.frequencia_min = 88
        self.frequencia_max = 108
        self.estacoes = estacoes
        self.volume = 0
        self.ligado = False
        self.estacao_atual = None
        self.frequencia_atual = None
        self.antena_habilitada = False

    def ligar(self):
        frequencias = list(estacoes.keys())
        if self.antena_habilitada == True and self.ligado == True:
            self.estacao_atual = estacoes[frequencias[0]]
            self.frequencia_atual = frequencias[0]
            self.volume_min = 0
            print(f'o rádio está ligado no(a) {self.estacao_atual}FM')

        elif self.antena_habilitada == False and self.ligado == True:
            self.frequencia_atual = None
            self.volume_min = 0
            print('nao foi possível achar estacoes, levante a antena')
        else:
            print('ligue o radio')

    def desligar(self):
        if self.ligado == False:
            self.volume = None
            self.frequencia_atual = None
            self.estacao_atual = None
            print('o rádio está desligado')

    def aumentar_volume(self,valor=1):
        self.volume = self.volume + valor
        print(self.volume)

    def diminuir_volume(self,valor=1):
        self.volume = self.volume - valor
        print(self.volume)


    def mudar_frequencia(self,frequencia_digitada=0):
        frequencias = list(estacoes.keys())
        if frequencia_digitada > 0:
            self.frequencia_atual = frequencia_digitada
            if self.frequencia_atual in self.estacoes.keys():
                self.estacao_atual = self.estacoes.get(frequencia_digitada)
            else:
                print('estacao inexistente')
        elif frequencia_digitada == 0:  # vá para a proxima estacao de radio
            freq_atual = self.frequencia_atual
            for i in frequencias:
                if i > freq_atual:
                    self.frequencia_atual = i
                    return self.frequencia_atual
            self.frequencia_atual = frequencias[0]
        return self.frequencia_atual            

            


rad_1 = Radio(100,estacoes)
rad_1.antena_habilitada = True
rad_1.ligado = True
rad_1.ligar()
#rad_1.desligar()
rad_1.aumentar_volume(3)
rad_1.diminuir_volume()
print(rad_1.mudar_frequencia())
