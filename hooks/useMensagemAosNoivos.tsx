import { useState } from "react"

export default function useMensagemAosNoivos(){
    const [mensagem, setMensagem] = useState('')
    const [link, setLink] = useState(`https://api.whatsapp.com/send?phone=5542998675557&text=${mensagem}`)
    return{
        mensagem, setMensagem, link, setLink
    }
}