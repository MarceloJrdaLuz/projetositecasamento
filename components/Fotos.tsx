export default function Fotos() {
    const fotos = [
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
    ]

    function renderMiniaturas() {
        return (fotos.map((foto, i) => (
            <div className={`w-40 mr-1`} key={i}>
                <img className={`h-full w-full object-cover brightness-50 hover:brightness-100`} src={`${foto.foto}`} alt={`${i}`} key={i} />
            </div>
        ))
        )
    }
    function renderFotos() {
        return (fotos.map((foto, i) => (
            <div className={`w-screen mr-1`} key={i}>
                <img className={`h-full w-full object-cover brightness-50 hover:brightness-100`} src={`${foto.foto}`} alt={`${i}`} key={i} />
            </div>
        ))
        )
    }
    return (
        <>
            <section className={`flex w-fit h-5/6`}>
                {renderFotos()}
            </section>
            <aside className={`flex m-1 w-screen h-40`}>
                <div className={`flex w-fit `}>
                    {renderMiniaturas()}
                </div>
            </aside>
        </>
    )
}