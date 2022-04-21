interface DataCasamentoProps{
    data: string
    nomeCasal: string
}

export default function DataCasamento(props: DataCasamentoProps){
    return(
        <div className={`flex justify-center items-center relative`}>
            <div className={`text-[26px] font-['Ultra'] mb-2 text-casamento-900 font-extrabold tracking-widest`}>
                {props.data}
            </div>
            <div className={`mt-4 font-bold bg-transparent absolute text-2xl text-[#9b6c14] tracking-wider`}>
                {props.nomeCasal}
            </div>
        </div>
    )
}