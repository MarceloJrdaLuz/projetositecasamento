import { useEffect, useState } from "react"
import TempoRestante from '../functions/TempoRestante'

interface ContagemRegressivaProps {
}

export default function ContagemRegressiva(props: ContagemRegressivaProps) {

    const [dias, setDias] = useState<null | number>(null)
    const [horas, setHoras] = useState<null | number>(null)
    const [minutos, setMinutos] = useState<null | number>(null)
    const [segundos, setSegundos] = useState<null | number>(null)
    const [mudancaSegundos, setMudancaSegundos] = useState(false)

    useEffect(() => {
        setMudancaSegundos(false)
    }, [segundos, minutos, horas, dias])


    function setTempo() {
        setInterval(() => {
            const { dias, minutes, horas, seconds } = TempoRestante('2022-08-07')
            setDias(dias)
            setHoras(horas)
            setMinutos(minutes)
            setMudancaSegundos(mudancaSegundos === true ? false : true)
            setSegundos(seconds)
        }, 1000)
    }
    return (
        <div className="flex-col justify-center items-center w-3/4 h-72">
            <div className="text-3xl text-center max-w-[300px]">Contagem Regressiva para o Grande Dia</div>
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
                        <div className={`w-full ${mudancaSegundos === true ? 'mb-0.5 border-r' : 'mb-1 border-r-0'} bg-casamento-300 rounded-t-sm`}></div>
                        <div className={`w-full  bg-casamento-300 rounded-b-sm ${mudancaSegundos === true ? 'border-r' : 'border-r-0'}`}></div>
                        <span className="absolute text-center text-4xl h-full top-3 text-white">{segundos}</span>
                    </div>
                    <div className="w-full text-center text-xl">Segundos</div>
                </div>
            </div>
        </div>
    )
}