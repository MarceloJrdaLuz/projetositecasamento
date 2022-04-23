import { Footer } from "../components/Footer"
import HeadComponent from "../components/HeadComponet"
import Historia from "../components/Historia"
import MenuFixo from "../components/MenuFixo"
import MenuNavegacao from "../components/MenuNavegacao"
import useMenuShow from "../hooks/useMenuShow"

export default function NossaHistoria() {
    const { menuShow, setMenuShow } = useMenuShow()
    return (
        <>
            <HeadComponent title='Nossa História' />
            <main className={`flex justify-between relative`}>
                <MenuFixo menu={menuShow} letrasIniciais="P & E" transparente={false} onClick={() => setMenuShow(menuShow === true ? false : true)} />
                {menuShow && <MenuNavegacao />}
                <div className={`${menuShow && 'hidden'} flex-col h-auto`}>
                    <Historia 
                    titulo="Nossa História" 
                    subtitulo="Conheça os detalhes da nossa caminhada até esse grande sonho do nosso casamento!" 
                    texto="Quando nos conhecemos pela primeira vez, nem imaginávamos chegar até aqui. E agora que está tão perto de nos tornamos uma só carne, um lindo filme começa a passar em nossa mente reforçando a admiração, respeito, amizade e amor que construímos até aqui!" 
                    />
                    <div className="flex">
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}