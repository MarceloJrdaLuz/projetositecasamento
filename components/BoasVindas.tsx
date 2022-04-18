import Image from 'next/image'
import divisor from '../public/divisord.png'

interface BoasVindasProps{
    texto: string
}

export default function BoasVindas(props: BoasVindasProps){
    return(
        <div className="flex flex-wrap w-10/12 h-44 justify-center">
            <h1 className="text-3xl min-w-[320px] text-center">Sejam Bem Vindos ao Nosso Site!</h1>
            <div className='h-28 w-40 -m-8'>
                <Image src={divisor} alt='divisor de texto'/>
            </div>
            <p className="text-2xl text-center my-10">A melhor forma de compartilhar esse momento é vivendo juntos esse sonho</p>
            <p className="text-center text-2xl">{props.texto}</p>
        </div>
    )
}