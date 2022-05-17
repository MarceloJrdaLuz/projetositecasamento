import Image from 'next/image'
import Maos from '../svg/Maos.svg'
export default function TemaCapa () {
    return(
        <div className="flex w-1/2 min-w-[200px] h-20 sm:h-40 lg:h-64 border border-white rounded-full absolute z-10">
            <div className="flex justify-center items-center w-1/2">
                <span className="pb-6 text-2xl text-white font-bold">P</span>
                <div className="h-1 w-8 border-t-2 border-white -rotate-45"></div>
                <span className="pt-6 text-2xl text-white font-bold">E</span>
            </div>
            <div className='flex items-center justify-center w-1/2 h-full'>
                <Image src={Maos} alt="Desenho de maos dadas"></Image>
            </div>
        </div>
    )
}