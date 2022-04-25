import { useEffect, useState } from "react"

export default function Fotos() {
    const fotos = [
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
        { foto: 'https://drive.google.com/uc?export=view&id=0B1jZK_xlxvEceGRuMzJTaktFUTA' },
    ]

    const [scrollPos, setScrollX] = useState(0)

    useEffect(()=>{
        const onScroll = ()=>setScrollX(window.scrollX)
        // window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, {passive: true})
        return ()=> window.removeEventListener('scroll', onScroll)
    },[])

    console.log(scrollPos)

        const [fotoDestaque, setFotoDestaque] = useState(0)

        function renderMiniaturas() {
            return (fotos.map((foto, i) => (
                <div  id={`${i}`} className={`w-40 mr-1`} key={i}>
                    <img tabIndex={i} onFocus={()=>{setFotoDestaque(i)} }   className={`h-full w-full object-cover brightness-50 focus:brightness-100 ${fotoDestaque === i && 'brightness-100'}  `} src={`${foto.foto}`} alt={`${i}`} key={i}/>
                </div>
            ))
            )
        }
        console.log(fotoDestaque)
        function renderFotos() {
            return (fotos.map((foto, i) => (
                <div id={`${i}`} className={`w-screen mr-1`} key={i}>
                    <img  tabIndex={i} onFocus={()=>setFotoDestaque(i)} className={`h-full w-full object-cover brightness-50 focus:brightness-100 ${fotoDestaque === i && 'brightness-100'}`} src={`${foto.foto}`} alt={`${i}`} key={i} />
                </div>
            ))
            )
        }
        return (
            <>
                <section className={`flex w-screen h-5/6 overflow-scroll`}>
                    <div className={`flex w-fit`}>
                        {renderFotos()}
                    </div>
                </section>
                <aside className={`flex m-1 w-screen h-40 overflow-scroll`}>
                    <div className={`flex w-fit `}>
                        {renderMiniaturas()}
                    </div>
                </aside>
            </>
        )
}