interface BotaoProps{
    titulo: string
    link: string
    onClick: ()=>void
}

export default function Botao (props: BotaoProps){
    return(
        <a href={props.link} onClick={props.onClick} className={`mt-8 flex justify-center w-10/12 border border-dourado-100 p-5 mx-auto rounded-lg text-4xl bg-botao-100 hover:bg-casamento-300 text-dourado-100`}>
            {props.titulo}
        </a> 
    )
}