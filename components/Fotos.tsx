import Image from "next/image"
import { useEffect, useState } from "react"
import Back from '../public/back.svg'
import Proximo from '../public/proximo.svg'

export default function Fotos() {
    const fotos = [
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEcTGZjRjNJeDh2cTg' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEcQkJ1LVNQV1VUTTQ' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
    ]

    const [fotoDestaque, setFotoDestaque] = useState(0)
    const [screen, setScreen] = useState(false)

    useEffect(() => {
        renderizarFotosScreen(fotoDestaque)
    }, [fotoDestaque])

    function renderMiniaturas() {
        return (fotos.map((foto, i) => (
            <div id={`${i}`} onClick={() => setScreen(true)} className={`flex xs:w-48 xs:h-48  m-1`} key={i}>
                <img tabIndex={i} onFocus={() => { setFotoDestaque(i) }} className={`h-full w-full object-cover brightness-50 focus:brightness-100 ${fotoDestaque === i && 'brightness-100'}  `} src={`${foto.foto}`} alt={`${i}`} key={i} />
            </div>
        ))
        )
    }

    function renderizarFotosScreen(id = 0) {
        return (
            <div className={`flex items-center relative m-2`}>
                <img src={`${fotos[fotoDestaque].foto}`} alt={`Foto${fotos[fotoDestaque].foto}`} />
                <div onClick={() => setFotoDestaque(fotoDestaque !== 0 ? fotoDestaque - 1 : fotoDestaque + fotos.length - 1)} className="flex justify-center absolute w-10 h-28 bg-transparent hover:bg-[#cccccc37] cursor-pointer">
                    <Image src={Back} alt='Seta Voltar' />
                </div>
                <div onClick={() => setFotoDestaque(fotoDestaque === fotos.length - 1 ? fotoDestaque - fotos.length + 1 : fotoDestaque + 1)} className="flex justify-center absolute w-10 h-28 bg-transparent right-0 hover:bg-[#cccccc37] cursor-pointer transition">
                    <Image src={Proximo} alt='Seta Voltar' />
                </div>
            </div>
        )
    }
    return (
        <>
            {screen ? (
                <>
                    <section className={`flex justify-center items-center absolute bg-[#131212f5] w-screen h-screen m-auto transition`}>
                        {renderizarFotosScreen()}
                    </section>
                    <div className="w-screen h-screen"></div>
                </>
            ) : (
                <aside className={`flex flex-wrap flex-1 justify-center w-screen mt-16`}>
                    {renderMiniaturas()}
                </aside>
            )
            }
        </>
    )
}