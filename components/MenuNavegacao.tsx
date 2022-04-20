import Link from 'next/link'
import { useState } from 'react'
import SecaoMenu from './SecaoMenu'

export default function MenuNavegacao() {

    const [paginasVisivel, setPaginasVisivel] = useState(true)
    const [confirmarPresencaVisivel, setConfirmarPresencaVisivel] = useState(false)
    const [listaPresentesVisivel, setListaPresentesVisivel] = useState(false)

    function renderItensPaginas() {
        return (
            <>
                <Link href={'/'} passHref>
                    <li className="py-3 text-2xl"></li>
                </Link>
                <Link href={'/nossahistoria'} passHref>
                    <li className="py-3 text-2xl">Nossa História</li>
                </Link>
                <Link href={'/mensagemaosnoivos'} passHref>
                    <li className="py-3 text-2xl">Mensagem aos Noivos</li>
                </Link>
                <Link href={'/depoimentodocasal'} passHref>
                    <li className="py-3 text-2xl">Depoimento do Casal</li>
                </Link>
                <Link href={'/galeriadefotos'} passHref>
                    <li className="py-3 text-2xl">Galeria de Fotos</li>
                </Link>
                <Link href={'/cerimonia'} passHref>
                    <li className="py-3 text-2xl">Cerimônia</li>
                </Link>
            </>
        )
    }
    function renderConfirmacao() {
        return (
            <>
                <Link href={'/confirmarpresenca'} passHref>
                    <li className="py-3 text-2xl">Confirme sua Presença</li>
                </Link>
            </>
        )
    }
    function renderListaPresentes() {
        return (
            <>
                <Link href={'/listadepresentes'} passHref>
                    <li className="py-3 text-2xl">Lista de Presentes</li>
                </Link>
            </>
        )
    }

    return (
        <div className={`h-auto overflow-y-auto pt-14 flex justify-between flex-wrap`}>
            <div className="paginas m-4 h-fit">
                <SecaoMenu texto='Páginas' paginasVisivel={paginasVisivel} onClick={() => setPaginasVisivel(paginasVisivel === true ? false : true)} />
                {paginasVisivel && <ul className="pl-5">
                    {renderItensPaginas()}
                </ul>}
                <div className="confirmacao h-auto">
                    <SecaoMenu texto='Confirme sua presença' confirmarPresencaVisivel={confirmarPresencaVisivel} onClick={() => setConfirmarPresencaVisivel(confirmarPresencaVisivel === true ? false : true)} />
                    {confirmarPresencaVisivel && <ul className="pl-5">
                        {confirmarPresencaVisivel && renderConfirmacao()}
                    </ul>}
                </div>
                <div className="presentes h-auto">
                    <SecaoMenu texto='Lista de Presentes' listaPresentesVisivel={listaPresentesVisivel} onClick={() => setListaPresentesVisivel(listaPresentesVisivel === true ? false : true)} />
                    {listaPresentesVisivel && <ul className="pl-5">
                        {listaPresentesVisivel && renderListaPresentes()}
                    </ul>}
                </div>
            </div>
        </div>
    )
}