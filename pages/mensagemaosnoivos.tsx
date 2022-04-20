import { Footer } from "../components/Footer"
import HeadComponent from "../components/HeadComponet"
import MenuFixo from "../components/MenuFixo"
import MenuNavegacao from "../components/MenuNavegacao"
import useMenuShow from "../hooks/useMenuShow"

export default function MensagemAosNoivos() {
    const { menuShow, setMenuShow } = useMenuShow()
    return (
        <>
            <HeadComponent title='Mensagem aos Noivos' />
            <main className={`flex h-screen relative`}>
                <MenuFixo letrasIniciais="P & E" transparente={false} onClick={() => setMenuShow(menuShow === true ? false : true)} />
                {menuShow && <MenuNavegacao />}
                <div className={`${menuShow && 'hidden'} h-screen`}>
                    <div className="h-full flex items-end">
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}