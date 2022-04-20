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
                    <li className={`py-3 pl-5 text-2xl w-screen ${document.title === 'Página Inicial' && 'bg-white'}`}>Página Inicial</li>
                </Link>
                <Link href={'/nossahistoria'} passHref>
                    <li className={`py-3 pl-5 text-2xl w-screen ${document.title === 'Nossa História' && 'bg-white'}`}>Nossa História</li>
                </Link>
                <Link href={'/mensagemaosnoivos'} passHref>
                    <li className={`py-3 pl-5 text-2xl w-screen ${document.title === 'Mensagem aos Noivos' && 'bg-white'}`}>Mensagem aos Noivos</li>
                </Link>
                <Link href={'/depoimentodocasal'} passHref>
                    <li className={`py-3 pl-5 text-2xl w-screen ${document.title === 'Depoimento do Casal' && 'bg-white'}`}>Depoimento do Casal</li>
                </Link>
                <Link href={'/galeriadefotos'} passHref>
                    <li className={`py-3 pl-5 text-2xl w-screen ${document.title === 'Galeria de Fotos' && 'bg-white'}`}>Galeria de Fotos</li>
                </Link>
                <Link href={'/cerimonia'} passHref>
                    <li className={`py-3 pl-5 text-2xl w-screen ${document.title === 'Cerimônia' && 'bg-white'}`}>Cerimônia</li>
                </Link>
            </>
        )
    }
    function renderConfirmacao() {
        return (
            <>
                <Link href={'/confirmarpresenca'} passHref>
                    <li className={`py-3 pl-5 text-2xl w-screen ${document.title === 'Confirme sua Presença' && 'bg-white'}`}>Confirme sua Presença</li>
                </Link>
            </>
        )
    }
    function renderListaPresentes() {
        return (
            <>
                <Link href={'/listadepresentes'} passHref>
                    <li className={`py-3 pl-5 text-2xl w-screen ${document.title === 'Lista de Presentes' && 'bg-white'}`}>Lista de Presentes</li>
                </Link>
            </>
        )
    }

    return (
        <div className={`h-auto overflow-y-auto pt-14 flex justify-between flex-wrap bg-casamento-900`}>
            <div className="paginas h-screen">
                <SecaoMenu texto='Páginas' paginasVisivel={paginasVisivel} onClick={() => setPaginasVisivel(paginasVisivel === true ? false : true)} />
                {paginasVisivel && <ul>
                    {renderItensPaginas()}
                </ul>}
                <div className="confirmacao h-auto">
                    <SecaoMenu texto='Confirme sua presença' confirmarPresencaVisivel={confirmarPresencaVisivel} onClick={() => setConfirmarPresencaVisivel(confirmarPresencaVisivel === true ? false : true)} />
                    {confirmarPresencaVisivel && <ul>
                        {confirmarPresencaVisivel && renderConfirmacao()}
                    </ul>}
                </div>
                <div className="presentes h-auto">
                    <SecaoMenu texto='Lista de Presentes' listaPresentesVisivel={listaPresentesVisivel} onClick={() => setListaPresentesVisivel(listaPresentesVisivel === true ? false : true)} />
                    {listaPresentesVisivel && <ul>
                        {listaPresentesVisivel && renderListaPresentes()}
                    </ul>}
                </div>
            </div>
        </div>
    )
}