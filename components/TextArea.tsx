import useMensagemAosNoivos from "../hooks/useMensagemAosNoivos"
import Botao from "./Botao"


export default function TextArea() {

    const { mensagem, setMensagem, link, setLink } = useMensagemAosNoivos()

    return (
        <div>
            <textarea 
            onChange={({target: { value }}) => {setMensagem(value.trim())}} 
            className={`flex w-11/12 mt-8 shadow-md mx-auto bg-casamento-900 border border-dourado-100 rounded-md text-2xl p-4 h-52 focus:outline-dourado-100 focus:border-dourado-100 focus:shadow-xl`} name="" id="" maxLength={4000} placeholder="Mensagem" />
            <span className={`flex w-11/12 m-auto`}>{4000 - mensagem.length} restantes</span>
                <Botao titulo="Enviar" link={link} onClick={()=> setLink(`https://api.whatsapp.com/send?phone=5511944415828&text=${mensagem}`)}/>
        </div>

    )
}