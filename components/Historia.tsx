import Image from "next/image"
import foto from '../public/imagemcapa.jpeg'
import divisor from '../public/divisord.png'
import play from '../public/playicon.png'

interface HistoriaProps {
    titulo: string
    subtitulo: string
    texto: string
}

export default function Historia(props: HistoriaProps) {
    return (
        <section className={`w-screen h-auto flex-col justify-center items-center mt-14`}>
            <div className={`flex-col justify-between items-center w-full h-auto`}>
                <h1 className={`w-screen flex justify-center items-center text-5xl  text-center h-32`}>
                    {props.titulo}
                </h1>
                <div className={`w-screen flex justify-center items-center`}>
                    <div className='h-28 w-40 -m-8'>
                        <Image src={divisor} alt='divisor de texto' />
                    </div>
                </div>
                <h2 className={`w-screen flex justify-center items-center text-center text-3xl h-fit p-8`}>
                    {props.subtitulo}
                </h2>
                <p className={`w-screen flex justify-center items-center text-center text-3xl h-fit  p-8`}>
                    {props.texto}
                </p>
            </div>
            <div className={`flex justify-center items-center w-screen h-72 p-2 relative shadow-2xl`}>
                <div className={`flex w-full h-72`}>
                    <Image src={foto} alt='Video' objectFit="cover" />
                </div>
                <div className={`absolute w-28 h-28`}>
                    <Image src={play} alt='Botão Play'/>
                </div>
            </div>
        </section>
    )
}