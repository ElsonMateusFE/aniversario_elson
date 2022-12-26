AOS.init();

document.addEventListener('DOMContentLoaded', () => {
    const diaDoEvento = new Date('Jul 14 2023 00:00:00')
    const timeSeconds = diaDoEvento.getTime()
    
    const time = setInterval(() => {
        const data = new Date()
        const timeSecondsData = data.getTime()

        const diasAteAFesta = timeSeconds - timeSecondsData

        const dias = Math.floor(diasAteAFesta / (1000 * 60 * 60 * 24))
        const horas = Math.floor(diasAteAFesta % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const minutos = Math.floor(diasAteAFesta % (1000 * 60 * 60) / (1000 * 60))
        const secundos = Math.floor(diasAteAFesta % (1000 * 60) / 1000)
        
        document.querySelector('#time-da-festa').innerHTML = `${dias}d ${horas}h ${minutos}m ${secundos}s`

        if(diasAteAFesta < 0){
            clearInterval(time)
            document.querySelector('#time-da-festa').innerHTML = 'A festa terminou'
            document.querySelector('#pre-text').innerHTML = ''
        }

    })
})