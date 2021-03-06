import Image from 'next/image'

import Maos from '../svg/MaosDouradas.svg'

export function Footer() {
    return (
        <footer className='flex justify-center items-center w-screen bg-casamento-900 border-t border-dourado-100 mt-16 mb-5 p-5'>
            <div className='flex justify-center items-center w-11/12 m-auto'>
                <div className="flex justify-center items-center w-1/2 min-w-[200px] h-20 sm:h-40 rounded-full">
                    <div className="flex justify-center items-center w-1/2 ">
                        <span className="pb-6 text-2xl text-dourado-100 font-bold">P</span>
                        <div className="h-1 w-8 border-t-2 border-dourado-100 -rotate-45"></div>
                        <span className="pt-6 text-2xl text-dourado-100 font-bold">E</span>
                    </div>
                    <div className='flex justify-center items-center w-1/2'>
                        <Image src={Maos} alt="Maos dadas" ></Image>
                    </div>
                </div>
            </div>
        </footer>
    )
}
