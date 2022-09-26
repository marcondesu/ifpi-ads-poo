class Radio {
    vol_min: number
    vol_max: number
    volume: number
    freq_min: number
    freq_max: number
    freq_atual: number
    estacoes: {[key: number]: number}
    estacao_atual: string
    ligado: boolean
    antena: boolean

    constructor(vol_min = 0, vol_max = 100, volume:number, freq_min = 0, freq_max = 100, freq_atual: number, estacoes: object, estacao_atual: string, ligado = true, antena = true) {
        this.vol_min = vol_min
        this.vol_max = vol_max
        this.volume = volume
        this.freq_min = freq_min
        this.freq_max = freq_max
        this.freq_atual = freq_atual
        this.estacoes = {
            89.5: "Cocais",
            91.5: "Mix",
            94.1: "Boa",
            99.1: "Clube"
        }
        this.estacao_atual = estacao_atual
        this.ligado = ligado
        this.antena = antena
    }

    ligar(): void {
        this.ligado = true
        this.volume = this.vol_min

        if (this.antena) {
            this.freq_atual
        }
    }
}