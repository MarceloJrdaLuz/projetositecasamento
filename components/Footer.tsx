import Image from 'next/image'

import Maos from '../svg/MaosDouradas.svg'

export function Footer() {
    return (
        <footer className='flex justify-center items-center bg-casamento-900 border-t border-[#9b6c14] mt-16 p-5'>
            <div className="flex w-1/2 min-w-[200px] h-20 rounded-full">
                <div className="flex justify-center items-center w-1/2">
                    <span className="pb-6 text-2xl text-[#9b6c14] font-bold">P</span>
                    <div className="h-1 w-8 border-t-2 border-[#9b6c14] -rotate-45"></div>
                    <span className="pt-6 text-2xl text-[#9b6c14] font-bold">E</span>
                </div>
                <div className='w-1/2 h-full'>
                    <Image src={Maos} alt="Maos dadas"></Image>
                </div>
            </div>
        </footer>
    )
}
