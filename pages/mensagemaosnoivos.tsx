import DeixeSuaMensagem from "../components/MensagemAosNoivos"
import { Footer } from "../components/Footer"
import HeadComponent from "../components/HeadComponet"
import MenuFixo from "../components/MenuFixo"
import MenuNavegacao from "../components/MenuNavegacao"
import useMenuShow from "../hooks/useMenuShow"
import Mensagem from "../components/MensagemAosNoivos"
import useMensagemAosNoivos from "../hooks/useMensagemAosNoivos"
import { useEffect } from "react"

export default function MensagemAosNoivos() {
    const { menuShow, setMenuShow } = useMenuShow()
    const {mensagem} = useMensagemAosNoivos()

    useEffect(()=>{
        console.log(mensagem)
    }, [mensagem])

    return (
        <>
            <HeadComponent title='Mensagem aos Noivos' />
            <main className={`flex h-screen relative`}>
                <MenuFixo menu={menuShow} letrasIniciais="P & E" transparente={false} onClick={() => setMenuShow(menuShow === true ? false : true)} />
                {menuShow && <MenuNavegacao />}
                <div className={`${menuShow && 'hidden'} flex-col h-auto`}>
                    <Mensagem 
                    titulo="Mensagem aos Noivos" subtitulo="Deixe sua mensagem para nós!"
                    texto="Obrigado pelo carinho. Vamos lembrar para sempre deste momento tão especial!"
                    />
                    <div className="flex">
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}