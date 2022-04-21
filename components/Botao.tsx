interface BotaoProps{
    titulo: string
    onClick: ()=>void
}

export default function Botao (props: BotaoProps){
    return(
        <button className={`mt-8 flex justify-center w-10/12 border border-dourado-100 p-5 mx-auto rounded-lg text-4xl bg-[#ecbbcd84]`} onClick={props.onClick}>
            {props.titulo}
        </button>
    )
}