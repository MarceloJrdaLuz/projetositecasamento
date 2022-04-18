interface MenuFixoProps{
    letrasIniciais: string
    transparente: boolean
}

export default function MenuFixo(props: MenuFixoProps){
    return(
        <nav className={`fixed flex justify-between h-12 w-screen ${props.transparente ?'bg-transparent' : 'bg-casamento-900 border-b border-[#9b6c14]'} z-40`}>
            <div className={`p-3 font-bold ${props.transparente ? 'text-white' : 'text-black'}`}>{props.letrasIniciais}</div>
            <div className="flex flex-wrap justify-center items-center w-10 h-9 p-2 mt-1">
                <div className={`w-full h-[1px] ${props.transparente ? 'bg-white' : 'bg-black'}`}></div>
                <div className={`w-full h-[1px] ${props.transparente ? 'bg-white' : 'bg-black'}`}></div>
                <div className={`w-full h-[1px] ${props.transparente ? 'bg-white' : 'bg-black'}`}></div>
            </div>
        </nav>
    )
}