import Image from 'next/image'
import Maos from '../svg/Maos.svg'
export default function TemaCapa () {
    return(
        <div className="flex w-1/2 min-w-[200px] h-20 border border-white rounded-full absolute z-10">
            <div className="flex justify-center items-center w-1/2">
                <span className="pb-6 text-2xl text-white">P</span>
                <div className="h-1 w-8 border-t-2 border-white -rotate-45"></div>
                <span className="pt-6 text-2xl text-white">E</span>
            </div>
            <div className='w-1/2 h-full'>
                <Image src={Maos} alt=""></Image>
            </div>
        </div>
    )
}