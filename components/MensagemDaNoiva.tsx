import Image from "next/image"
import divisor from '../public/divisord.png'

interface MensagemDaNoivaProps {
    titulo: string
    subtitulo: string
    texto: string
}

export default function MensagemDaNoiva(props: MensagemDaNoivaProps) {
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
        </section>
    )
}