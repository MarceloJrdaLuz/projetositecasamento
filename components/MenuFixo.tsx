import Image from "next/image"
import useMenuShow from "../hooks/useMenuShow"
import cancel from '../public/cancel.svg'
import hamburguer from '../public/hamburguer.svg'
import cancelBlack from '../public/cancelblack.svg'
import hamburguerBlack from '../public/hamburguerblack.svg'
import 'next/image'

interface MenuFixoProps {
    letrasIniciais: string
    transparente: boolean
    menu: boolean
    onClick: ()=>void
}

export default function MenuFixo(props: MenuFixoProps) {
    const {menuShow, setMenuShow} = useMenuShow()
    return (
        <nav className={`fixed flex justify-between h-12 w-screen ${props.transparente ? 'bg-transparent transition ease-in duration-500' : 'bg-casamento-900 border-b border-[#9b6c14] transition ease-out duration-500'} z-40`}>
            <div className={`p-3 font-bold ${props.transparente ? 'text-white' : 'text-black'}`}>{props.letrasIniciais}</div>
            <div className={`flex flex-wrap justify-center items-center w-10 h-9 p-2 mt-1`} onClick={props.onClick}>
                {props.menu ? (
                    <>
                        <div>
                            <Image src={props.transparente ? cancel : cancelBlack} alt='Botao cancelar'/>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            {<Image src={props.transparente ? hamburguer : hamburguerBlack} alt='Botao hamburguer'/>}
                        </div>
                    </>
                )}
            </div>
        </nav>
    )
}