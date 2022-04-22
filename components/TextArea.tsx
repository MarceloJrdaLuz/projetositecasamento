import Link from "next/link"
import useMensagemAosNoivos from "../hooks/useMensagemAosNoivos"
import Botao from "./Botao"

interface TextAreaProps {
    onChange: () => void
}

export default function TextArea(props: TextAreaProps) {

    const { mensagem, setMensagem, link, setLink } = useMensagemAosNoivos()

    return (
        <div>
            <textarea className={`flex w-11/12 mt-8 shadow-md mx-auto bg-casamento-900 border border-[#9b6c14] rounded-md text-2xl p-4 h-52 focus:outline-[#9b6c14] focus:border-[#9b6c14] focus:shadow-xl`} name="" id="" maxLength={4000} placeholder="Mensagem" onChange={(e) => { setMensagem(e.target.value), setLink(`https://api.whatsapp.com/send?phone=556681420394&text=${mensagem}`), props.onChange }} value={mensagem} />
            <span className={`ml-4`}>{4000 - mensagem.length} restantes</span>
                <Botao titulo="Enviar" link={link}/>
        </div>

    )
}