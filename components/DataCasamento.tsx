interface DataCasamentoProps{
    data: string
    nomeCasal: string
}

export default function DataCasamento(props: DataCasamentoProps){
    return(
        <div className={`flex justify-center items-center relative`}>
            <div className={`text-[26px] font-['Ultra'] text-white font-extrabold tracking-widest`}>
                {props.data}
            </div>
            <div className={`bg-transparent absolute text-xl text-[#9b6c14] tracking-wider`}>
                {props.nomeCasal}
            </div>
        </div>
    )
}