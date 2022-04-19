import { useState } from "react"

export default function useMenuShow(){
    const [menuShow, setMenuShow] = useState(false)
    return{
        menuShow, setMenuShow
    }
}