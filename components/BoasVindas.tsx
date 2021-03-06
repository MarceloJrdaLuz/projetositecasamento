import Image from 'next/image'
import divisor from '../public/divisord.png'

interface BoasVindasProps{
    texto: string
}

export default function BoasVindas(props: BoasVindasProps){
    return(
        <div className="flex flex-wrap w-72 sm:w-7/12 h-fit justify-center items-center">
            <div className='flex md:flex-col flex-wrap justify-center items-center'>
                <h1 className="text-3xl w-screen sm:text-4xl min-w-[320px] text-center">Sejam Bem Vindos ao Nosso Site!</h1>
                <div className='h-28 w-40 -m-8'>
                    <Image src={divisor} alt='divisor de texto'/>
                </div>
            </div>
            <p className="text-2xl text-center my-10">A melhor forma de compartilhar esse momento é vivendo juntos esse sonho.</p>
            <p className="text-center text-2xl h-fit">{props.texto}</p>
        </div>
    )
}