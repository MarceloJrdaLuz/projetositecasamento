import { useState } from "react"

export default function TextArea() {

    const [caracteresRestantes, setCaracteresRestantes] = useState('')

    return (
        <div>
            <textarea className={`flex w-11/12 mt-8 shadow-md mx-auto bg-casamento-900 border border-[#9b6c14] rounded-md text-2xl p-4 h-52 focus:outline-[#9b6c14] focus:border-[#9b6c14] focus:shadow-xl`} name="" id="" maxLength={4000} placeholder="Mensagem" onChange={(e)=>{setCaracteresRestantes(e.target.value)}} value={caracteresRestantes}/>
            <span className={`ml-4`}>{4000 - caracteresRestantes.length} restantes</span>
        </div>

    )
}