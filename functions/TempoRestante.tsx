const moment = require("moment");

export default function TempoRestante (dateCasamento: string){
    const today = moment()
    const dataCasamento = moment(dateCasamento)
    
    const days = dataCasamento.diff(today, 'day')
    const hours = dataCasamento.diff(today, 'hour')%24
    const minutes = dataCasamento.diff(today, 'minutes')%60
    const seconds = dataCasamento.diff(today, 'seconds')%60

    return{
        days, hours, minutes, seconds
    }
}




