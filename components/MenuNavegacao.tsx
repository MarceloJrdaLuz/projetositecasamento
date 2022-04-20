export default function MenuNavegacao(){
    return(
        <div className={`h-screen pt-14`}>
            <div className="m-4">
                <div className={`text-2xl text-casamento-400 p-2`}>Páginas</div>
                <ul className="pl-5">
                    <li className="py-3 text-xl">Página Inicial</li>
                    <li className="py-3 text-xl">Nossa história</li>
                    <li className="py-3 text-xl">Mensagem aos noivos</li>
                    <li className="py-3 text-xl">Cerimônia</li>
                </ul>
            </div>
        </div>
    )
}