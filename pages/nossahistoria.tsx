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
                    subtitulo="Conheça os detalhes da nossa caminhada até esse grande sonho do nosso casamento" 
                    texto="Quando nos conhecemos, nem imaginávamos que um dia tudo isso acabaria como um final de conto de fadas, com a realização do nosso grande sonho: o casamento! O coração aperta, o dia está chegando, e começa a passar um filme de tudo o que passamos para chegar até aqui. E como é bom relembrar cada pedacinho da nossa história de amor." 
                    />
                    <div className="flex">
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}