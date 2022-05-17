import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Back from '../public/back.svg'
import Proximo from '../public/proximo.svg'
import Fechar from '../public/cancel.svg'
import { fotos } from '../utils/fotosArray'

export default function Fotos() {

    const [fotoDestaque, setFotoDestaque] = useState(0)
    const [screen, setScreen] = useState(false)

    useEffect(() => {
        renderizarFotosScreen(fotoDestaque)
    }, [fotoDestaque])

    function renderMiniaturas() {
        return (fotos.map((foto, i) => (
            <div id={`${i}`} onClick={() => { setScreen(true) }} className={`${i} flex w-full h-64 xs:w-48 xs:h-48  m-1 relative`} key={i}>
                <Image unoptimized={true} layout="fill" tabIndex={i} onFocus={() => { setFotoDestaque(i) }} className={`h-full w-full object-cover`} src={`${foto.foto}`} alt={`${i}`} key={i} />
            </div>
        ))
        )
    }

    function renderizarFotosScreen(id = 0) {
        return (
            <div className="flex-col justify-center items-center h-5/6 pt-9">
                <div className="flex justify-end w-screen h-10">
                    <div onClick={() =>  setScreen(false)} className="h-full w-10 p-2">
                        <Image src={Fechar} alt='Botao fechar' />
                    </div>
                </div>
                <div className={`flex h-full w-full items-center relative`}>
                    <Image unoptimized={true} objectFit="scale-down" layout='fill' src={`${fotos[fotoDestaque].foto}`} alt={`Foto ${fotos[fotoDestaque].foto}`} />
                    <div onClick={() => setFotoDestaque(fotoDestaque !== 0 ? fotoDestaque - 1 : fotoDestaque + fotos.length - 1)} className="flex justify-center absolute w-10 h-28 bg-transparent hover:bg-[#cccccc37] cursor-pointer">
                        <Image src={Back} alt='Seta Voltar' />
                    </div>
                    <div onClick={() => setFotoDestaque(fotoDestaque === fotos.length - 1 ? fotoDestaque - fotos.length + 1 : fotoDestaque + 1)} className="flex justify-center absolute w-10 h-28 bg-transparent right-0 hover:bg-[#cccccc37] cursor-pointer transition">
                        <Image src={Proximo} alt='Seta Voltar' />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <>
                <section className={`${screen ? 'z-40' : '-z-10'} flex justify-center items-center absolute bg-[#131212f5] w-screen h-screen m-auto transition`}>
                    {renderizarFotosScreen()}
                </section>
                <aside className={`${!screen ? '-z-10' : 'z-40'}absolute flex flex-wrap flex-1 justify-center w-screen mt-16 sm:mt-24 overflow-auto`}>
                    {renderMiniaturas()}
                </aside>
            </>
            {/* {screen ? (
            ) : (
                <aside id="fotos-container" className={`flex flex-wrap flex-1 justify-center w-screen mt-16 sm:mt-24 overflow-auto`}>
                    {renderMiniaturas()}
                </aside>
            )
            } */}
        </>
    )
}