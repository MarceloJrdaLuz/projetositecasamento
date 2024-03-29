import moment, { isMoment } from "moment"
import { useEffect, useState } from "react"
import TempoRestante from '../functions/TempoRestante'

interface ContagemRegressivaProps {
}
export default function ContagemRegressiva(props: ContagemRegressivaProps) {

    const [dias, setDias] = useState<null | number>(null)
    const [horas, setHoras] = useState<null | number>(null)
    const [minutos, setMinutos] = useState<null | number>(null)
    const [segundos, setSegundos] = useState<null | number>(null)

    const [diaDoCasamento, setDiaDoCasamento] = useState(false)

    useEffect(() => {
        moment().format('YYYY-MM-DD') === '2022-07-30' && setDiaDoCasamento(true)
    },[segundos])


    setTempo()
    function setTempo() {
        setInterval(() => {
            const { days, minutes, hours, seconds } = TempoRestante('2022-07-30')
            dias !== days && setDias(days)
            horas !== hours && setHoras(hours)
            minutos !== minutes && setMinutos(minutes)
            segundos !== seconds && setSegundos(seconds)
        }, 1000)
    }

    return (
        <div className="flex-col justify-center items-center w-3/4 h-72">
            <div className="text-3xl md:text-4xl text-center max-w-[300px] m-auto pb-4">Contagem Regressiva para o Grande Dia</div>
            {!diaDoCasamento ? (
            <div className="flex flex-wrap  w-full h-2/5 justify-between p-5">
                <div className="flex flex-wrap items-center w-5/12 m-2 h-full">
                    <div className="flex flex-wrap w-full h-5/6 justify-center relative">
                        <div className="w-full mb-1 bg-casamento-300 rounded-t-sm"></div>
                        <div className="w-full  bg-casamento-300 rounded-b-sm"></div>
                        <span className="absolute top-3 text-white text-4xl">{dias}</span>
                    </div>
                    <div className="w-full text-center text-xl">Dias</div>
                </div>
                <div className="flex flex-wrap items-center w-5/12 m-2 h-full">
                    <div className="flex flex-wrap w-full h-5/6 justify-center relative">
                        <div className="w-full mb-1 bg-casamento-300 rounded-t-sm"></div>
                        <div className="w-full  bg-casamento-300 rounded-b-sm"></div>
                        <span className="absolute top-3 text-white text-4xl">{horas}</span>
                    </div>
                    <div className="w-full text-center text-xl">Horas</div>
                </div>
                <div className="flex flex-wrap items-center w-5/12 m-2 h-full">
                    <div className="flex flex-wrap w-full h-5/6 justify-center relative">
                        <div className={`w-full mb-1 bg-casamento-300 rounded-t-sm`}></div>
                        <div className={`w-full  bg-casamento-300 rounded-b-sm `}></div>
                        <span className="absolute top-3 text-white text-4xl">{minutos}</span>
                    </div>
                    <div className="w-full text-center text-xl">Minutos</div>
                </div>
                <div className="flex flex-wrap items-center w-5/12 m-2 h-full">
                    <div className="flex flex-wrap w-full h-5/6 justify-center relative">
                        <div className={`w-full ${segundos !== null && segundos % 2 === 0 ? 'mb-1 border-r-0' : 'mb-0.5 border-r'} bg-casamento-300 rounded-t-sm`}></div>
                        <div className={`w-full  bg-casamento-300 rounded-b-sm ${segundos !== null && segundos % 2 === 0 ? 'border-r-0' : 'border-r'}`}></div>
                        <span className={`absolute text-center text-4xl h-full top-3 text-white`}>{segundos}</span>
                    </div>
                    <div className="w-full text-center text-xl">Segundos</div>
                </div>
            </div>):
            (
                <div className="flex justify-center items-center w-full p-14 md:p-24 text-center text-5xl lg:text-6xl bg-casamento-300 text-white rounded-xl shadow-lg">O grande dia chegou</div>
            )}
        </div>
    )
}
