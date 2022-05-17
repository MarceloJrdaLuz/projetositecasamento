import Image from "next/image";
import CapaImg from '../public/imagemcapa.jpeg'
import DataCasamento from "./DataCasamento";
import TemaCapa from "./TemaCapa";


export default function Capa (){
    return( 
        <div className="sm:h-screen sm:w-screen">
            <div className="container-capa flex justify-center items-center w-screen h-80 sm:h-5/6 bg-casamento-300 relative">
                <TemaCapa/>
                <div className="flex justify-center items-end w-1/2 h-full">
                    <DataCasamento data={`07 08 2022`} nomeCasal="Paloma & Everton"/>
                </div>
                <div className="w-1/2 h-full">
                    <div className="w-full h-full relative z-0">
                        <Image src={CapaImg} layout="fill" objectFit="cover" alt="Foto capa"/>
                    </div>
                </div>
            </div>
        </div>
    )
}