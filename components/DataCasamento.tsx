interface DataCasamentoProps{
    data: string
    nomeCasal: string
}

export default function DataCasamento(props: DataCasamentoProps){
    return(
        <div className={`flex`}>
            {/* <div className={`text-[26px] font-['Ultra'] mb-2 text-casamento-900 font-extrabold tracking-widest`}>
                {props.data}
            </div> */}
            <div className={`mt-4 font-bold bg-transparent text-2xl text-casamento-900 tracking-wider`}>
                {props.nomeCasal}
            </div>
        </div>
    )
}