import Image from "next/image"
import arrow from '../public/arrow.svg'

interface SecaoMenuProps {
    texto: string
    paginasVisivel?: boolean
    confirmarPresencaVisivel?: boolean
    listaPresentesVisivel?: boolean
    onClick: ()=> void
}

export default function SecaoMenu(props: SecaoMenuProps) {

    return (
        <div className={`text-3xl text-casamento-400 p-2 flex justify-start  w-fit h-12`} onClick={props.onClick}>{props.texto} <span className={`w-30 h-full pt-1 ${props.paginasVisivel || props.listaPresentesVisivel || props.confirmarPresencaVisivel ? 'rotate-180 transition duration-500' : 'rotate-0 duration-500'}`}><Image src={arrow} alt='Seta' layout='fixed' objectFit='cover' objectPosition={'center'}/></span></div>
    )
}