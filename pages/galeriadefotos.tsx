import { Footer } from "../components/Footer"
import Fotos from "../components/Fotos"
import HeadComponent from "../components/HeadComponet"
import MenuFixo from "../components/MenuFixo"
import MenuNavegacao from "../components/MenuNavegacao"
import useMenuShow from "../hooks/useMenuShow"

export default function GaleriaDeFotos() {
    const { menuShow, setMenuShow } = useMenuShow()
    return (
        <>
            <HeadComponent title='Galeria de Fotos' />
            <main className={`flex h-screen relative`}>
                <MenuFixo menu={menuShow} letrasIniciais="P & E" transparente={false} onClick={() => setMenuShow(menuShow === true ? false : true)} />
                {menuShow && <MenuNavegacao />}
                <div className={`${menuShow && 'hidden'} flex-col h-screen w-screen overflow-hidden`}>
                   <Fotos/>
                    <div className="flex">
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}