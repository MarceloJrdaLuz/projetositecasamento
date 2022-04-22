import { useEffect, useState } from "react"

export default function useMensagemAosNoivos(){
    const [mensagem, setMensagem] = useState('')

    return{
        mensagem, setMensagem
    }
}