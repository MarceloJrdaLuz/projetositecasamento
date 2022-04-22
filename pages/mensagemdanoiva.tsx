import { Footer } from "../components/Footer"
import HeadComponent from "../components/HeadComponet"
import MensagemDaNoiva from "../components/MensagemDaNoiva"
import MenuFixo from "../components/MenuFixo"
import MenuNavegacao from "../components/MenuNavegacao"
import useMenuShow from "../hooks/useMenuShow"

export default function MensagemDaNoivaPage() {
    const { menuShow, setMenuShow } = useMenuShow()
    return (
        <>
            <HeadComponent title='Mensagem da Noiva' />
            <main className={`flex h-screen relative`}>
                <MenuFixo menu={menuShow} letrasIniciais="P & E" transparente={false} onClick={() => setMenuShow(menuShow === true ? false : true)} />
                {menuShow && <MenuNavegacao />}
                <div className={`${menuShow && 'hidden'} h-screen`}>
                    <MensagemDaNoiva 
                    titulo="Mensagem da Noiva" 
                    subtitulo="Primeiramente quero agradecer a todos que aceitaram fazer parte deste dia tão importante  junto conosco. Tê-los conosco mesmo que  virtualmente torna este dia ainda mais especial. Obrigado." 
                    texto="E a minha família espiritual quero dizer que independentemente do tempo que conheço a cada um de vocês quero que saibam que sentirei muita saudades. Todos vocês me ajudaram muito em sentido espiritual. Admiro muito o zelo e esforço que fazem para se manterem na organização de Jeová. Saibam que as portas da nossa casa estão abertas para recebê-los lá no Paraná. Vou orar por vocês e quero que orem por mim! Sentirei saudades."
                    />
                    <div className="flex">
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}