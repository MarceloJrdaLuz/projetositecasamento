import Image from "next/image";
import CapaImg from '../public/imagemcapa.jpeg'
import TemaCapa from "./TemaCapa";


export default function Capa (){
    return( 
        <div className="container-capa flex justify-center items-center w-screen h-80 bg-casamento-300 relative">
            <TemaCapa/>
            <div className="bg-casamento-300 w-1/2 h-full">

            </div>
            <div className="w-1/2 h-full">
                <div className="w-full h-full relative z-0">
                    <Image src={CapaImg} layout="fill" objectFit="cover" alt="Foto capa">  

                    </Image>
                </div>
            </div>
        </div>
    )
}