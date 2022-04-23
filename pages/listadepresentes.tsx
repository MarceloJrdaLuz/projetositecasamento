import Link from "next/link";
import { Footer } from "../components/Footer";
import HeadComponent from "../components/HeadComponet";
import ListaPresentes from "../components/ListaPresentes";
import MenuFixo from "../components/MenuFixo";
import MenuNavegacao from "../components/MenuNavegacao";
import useMenuShow from "../hooks/useMenuShow";

export default function ListadePresentes() {

    const { menuShow, setMenuShow } = useMenuShow()
    return (
        <>
            <HeadComponent title='Lista de Presentes' />
            <main className={`flex h-screen relative`}>
                <MenuFixo menu={menuShow} letrasIniciais="P & E" transparente={false} onClick={() => setMenuShow(menuShow === true ? false : true)} />
                {menuShow && <MenuNavegacao />}
                <div className={`${menuShow && 'hidden'} h-screen`}>
                    <ListaPresentes
                        titulo="Lista de Presentes"
                        subtitulo="Queridos irmãos visto que estou me mudando para o Paraná não teremos como levar nenhum objeto conosco. Por esse motivo eu gostaria de pedir a compreensão de todos que desejarem nos dar um presente, que possam fazer isso pelos meios abaixo. Agradeço a compreensão de todos."
                        opcao1="No link abaixo vocês encontrarão uma lista de presentes que fizemos. Ao comprarem nesse link, que é totalmente seguro, receberemos o seu presente diretamente em nossa casa."
                        opcao2="Se desejarem nos presentear em dinheiro podem fazer isso por meio do pix abaixo."
                        chavePix="palomasts.menezes@hotmail.com"
                    />
                    <div className="flex">
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}